import React, { useEffect, useRef } from 'react';

interface BackgroundParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  outerAngle: number;
  outerDist: number;
  speed: number;
  size: number;
  alpha: number;
  charcoalHex: string;
  wobbleOffset: number;
  wobbleSpeed: number;
}

interface AiCardsParticleBackgroundProps {
  progress: number; // 0 to 1 scroll progress inside cards track
}

export const AiCardsParticleBackground: React.FC<AiCardsParticleBackgroundProps> = ({ progress }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressRef = useRef<number>(progress);

  const mouseRef = useRef({
    currX: -1000,
    currY: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
  });

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const CHARCOAL_SHADES = [
      '#E74905', // Pitch-black
      '#31338E', // Ultra-deep zinc
      '#E74905', // Deep charcoal
      '#31338E', // Charcoal grey
      '#E74905', // Mid-charcoal
      '#E74905', // Slate grey particle
    ];

    const PARTICLE_COUNT = 850;
    const particles: BackgroundParticle[] = [];

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize particles with continuous velocity drift
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const baseX = Math.random() * (width || 1200);
      const baseY = Math.random() * (height || 800);

      const outerAngle = Math.random() * Math.PI * 2;
      const outerDist = 1.2 + Math.random() * 0.8;

      const driftAngle = Math.random() * Math.PI * 2;
      const speed = 0.35 + Math.random() * 0.75; // Continuous particle drift velocity
      const vx = Math.cos(driftAngle) * speed;
      const vy = Math.sin(driftAngle) * speed;

      const size = Math.random() < 0.25 ? Math.random() * 2.4 + 1.2 : Math.random() * 1.3 + 0.6;
      const alpha = 0.35 + Math.random() * 0.6;
      const charcoalHex = CHARCOAL_SHADES[Math.floor(Math.random() * CHARCOAL_SHADES.length)];
      const wobbleOffset = Math.random() * Math.PI * 2;
      const wobbleSpeed = 0.03 + Math.random() * 0.04;

      particles.push({
        x: baseX,
        y: baseY,
        vx,
        vy,
        outerAngle,
        outerDist,
        speed,
        size,
        alpha,
        charcoalHex,
        wobbleOffset,
        wobbleSpeed,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mouseRef.current.active) {
        mouseRef.current.currX += (mouseRef.current.targetX - mouseRef.current.currX) * 0.1;
        mouseRef.current.currY += (mouseRef.current.targetY - mouseRef.current.currY) * 0.1;
      }

      particles.forEach((p) => {
        // Continuous particle drift motion across the background
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around canvas boundaries for continuous floating stream
        if (p.x < -40) p.x = width + 40;
        if (p.x > width + 40) p.x = -40;
        if (p.y < -40) p.y = height + 40;
        if (p.y > height + 40) p.y = -40;

        // Fluid organic wobble
        p.wobbleOffset += p.wobbleSpeed;
        const wobbleX = Math.sin(p.wobbleOffset) * 12;
        const wobbleY = Math.cos(p.wobbleOffset * 0.85) * 12;

        // Render directly in place under cards (no scroll-down position shift)
        let renderX = p.x + wobbleX;
        let renderY = p.y + wobbleY;

        // Interactive mouse repulsion
        if (mouseRef.current.active) {
          const dx = renderX - mouseRef.current.currX;
          const dy = renderY - mouseRef.current.currY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const pushRadius = 150;

          if (dist < pushRadius && dist > 0) {
            const force = (pushRadius - dist) / pushRadius;
            renderX += (dx / dist) * force * 30;
            renderY += (dy / dist) * force * 30;
          }
        }

        const currentAlpha = p.alpha;

        if (currentAlpha > 0.01) {
          ctx.save();
          ctx.globalAlpha = currentAlpha;
          ctx.fillStyle = p.charcoalHex;
          ctx.beginPath();
          ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);
          ctx.fill();

          if (p.size > 1.8) {
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.arc(renderX, renderY, p.size * 0.5, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 block"
    />
  );
};
