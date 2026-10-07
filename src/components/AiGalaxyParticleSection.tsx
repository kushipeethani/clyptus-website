import React, { useEffect, useRef } from 'react';

interface Particle {
  armIndex: number;
  distanceRatio: number; // 0 (core) to 1 (outer arm)
  baseAngle: number;
  speed: number;
  size: number;
  alpha: number;
  charcoalHex: string;
  wobbleOffset: number;
  wobbleSpeed: number;
}

export const AiGalaxyParticleSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse tracking with useRef to prevent React re-render resets on mouse movement
  const mouseRef = useRef({
    targetX: -1000,
    targetY: -1000,
    currX: -1000,
    currY: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const CHARCOAL_SHADES = [
      '#000000', // Pitch-black
      '#09090b', // Ultra-deep zinc
      '#18181b', // Deep charcoal
      '#27272a', // Charcoal grey
      '#3f3f46', // Mid-charcoal
      '#52525b', // Slate grey particle
    ];

    const NUM_ARMS = 4;
    const PARTICLE_COUNT = 1400;
    const particles: Particle[] = [];

    // Initialize spiral galaxy particles once on mount
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const armIndex = i % NUM_ARMS;
      const distanceRatio = Math.pow(Math.random(), 1.6);
      const baseAngle = (armIndex * (2 * Math.PI / NUM_ARMS)) + (Math.random() * 0.4 - 0.2);
      const speed = 0.002 + Math.random() * 0.003;
      const size = Math.random() < 0.2 ? Math.random() * 2.2 + 1.2 : Math.random() * 1.2 + 0.5;
      const alpha = Math.min(1, 0.35 + Math.random() * 0.65);
      const charcoalHex = CHARCOAL_SHADES[Math.floor(Math.random() * CHARCOAL_SHADES.length)];
      const wobbleOffset = Math.random() * Math.PI * 2;
      const wobbleSpeed = 0.02 + Math.random() * 0.03;

      particles.push({
        armIndex,
        distanceRatio,
        baseAngle,
        speed,
        size,
        alpha,
        charcoalHex,
        wobbleOffset,
        wobbleSpeed,
      });
    }

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    let globalRotation = 0;

    const render = () => {
      // 1. Clean solid pure white background (#FFFFFF)
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(width, height) * 0.42;

      globalRotation += 0.0012; // Smooth fluid orbital spin

      // Smoothly interpolate mouse pointer coordinates
      if (mouseRef.current.active) {
        mouseRef.current.currX += (mouseRef.current.targetX - mouseRef.current.currX) * 0.06;
        mouseRef.current.currY += (mouseRef.current.targetY - mouseRef.current.currY) * 0.06;
      }

      // 2. Draw subtle glowing off-white core halo
      const coreGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, maxRadius * 0.35
      );
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
      coreGradient.addColorStop(0.2, 'rgba(248, 250, 252, 0.95)');
      coreGradient.addColorStop(0.5, 'rgba(241, 245, 249, 0.6)');
      coreGradient.addColorStop(0.85, 'rgba(226, 232, 240, 0.2)');
      coreGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, maxRadius * 0.38, 0, Math.PI * 2);
      ctx.fill();

      // Core focal ring
      ctx.strokeStyle = 'rgba(226, 232, 240, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 24, 0, Math.PI * 2);
      ctx.stroke();

      // 3. Render animated particles along spiral galaxy arms
      particles.forEach((p) => {
        const spiralTightness = 4.2;
        const currentAngle = p.baseAngle + globalRotation + (1 - p.distanceRatio) * spiralTightness;
        const currentRadius = p.distanceRatio * maxRadius;

        p.wobbleOffset += p.wobbleSpeed * 0.04;
        const wobbleX = Math.sin(p.wobbleOffset) * (p.distanceRatio * 6);
        const wobbleY = Math.cos(p.wobbleOffset) * (p.distanceRatio * 6);

        let px = centerX + Math.cos(currentAngle) * currentRadius + wobbleX;
        let py = centerY + Math.sin(currentAngle) * currentRadius + wobbleY;

        let moveSpeedMultiplier = 1.0;

        // Interactive Mouse Influence: SLOW DOWN particles near mouse point
        if (mouseRef.current.active) {
          const dx = px - mouseRef.current.currX;
          const dy = py - mouseRef.current.currY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influenceRadius = 180;

          if (dist < influenceRadius && dist > 0) {
            const factor = (influenceRadius - dist) / influenceRadius;
            
            // SLOW DOWN motion: Reduce particle speed up to 50% near cursor
            moveSpeedMultiplier = Math.max(0.5, 1.0 - factor * 0.5);

            // Ultra-gentle slow magnetic micro-drift (max 0.8px)
            const gentleDrift = factor * 0.8;
            px += (dx / dist) * gentleDrift;
            py += (dy / dist) * gentleDrift;
          }
        }

        // Apply distance move speed (slowed down when mouse is over)
        p.distanceRatio -= (p.speed * 0.15) * moveSpeedMultiplier;
        if (p.distanceRatio <= 0.02) {
          p.distanceRatio = 0.98 + Math.random() * 0.02;
        }

        // Outer arm dispersion opacity fade
        const outerFade = p.distanceRatio > 0.85 
          ? (1 - p.distanceRatio) / 0.15 
          : (p.distanceRatio < 0.1 ? p.distanceRatio / 0.1 : 1);

        const finalAlpha = Math.max(0.05, Math.min(1, p.alpha * outerFade));

        // Draw crisp particle dot
        ctx.save();
        ctx.globalAlpha = finalAlpha;
        ctx.fillStyle = p.charcoalHex;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.size > 1.8) {
          ctx.fillStyle = '#000000';
          ctx.beginPath();
          ctx.arc(px, py, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      // 4. Subtle connecting delicate vector lines between inner spiral nodes
      ctx.save();
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.lineWidth = 0.75;
      ctx.beginPath();
      for (let i = 0; i < 40; i += 2) {
        const p1 = particles[i];
        const p2 = particles[(i + 15) % particles.length];
        const a1 = p1.baseAngle + globalRotation + (1 - p1.distanceRatio) * 4.2;
        const r1 = p1.distanceRatio * maxRadius;
        const x1 = centerX + Math.cos(a1) * r1;
        const y1 = centerY + Math.sin(a1) * r1;

        const a2 = p2.baseAngle + globalRotation + (1 - p2.distanceRatio) * 4.2;
        const r2 = p2.distanceRatio * maxRadius;
        const x2 = centerX + Math.cos(a2) * r2;
        const y2 = centerY + Math.sin(a2) * r2;

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []); // Run once on mount to keep animation loop 100% continuous and smooth

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.targetX = e.clientX - rect.left;
    mouseRef.current.targetY = e.clientY - rect.top;
    mouseRef.current.active = true;
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[500px] sm:h-[600px] bg-white text-slate-900 overflow-hidden border-t border-slate-200/80 select-none flex items-center justify-center"
    >
      {/* 4K Ultra-Crisp Monochrome Spiral Galaxy Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" 
      />
    </section>
  );
};
