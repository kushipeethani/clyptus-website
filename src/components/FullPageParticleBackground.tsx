import React, { useEffect, useRef } from 'react';

interface LogoSamplePoint {
  xRatio: number;
  yRatio: number;
  color: string;
}

interface Particle {
  driftX: number;
  driftY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  charcoalHex: string;
  wobbleOffset: number;
  wobbleSpeed: number;
  targetRatioX: number;
  targetRatioY: number;
  logoColor: string;
}

export const FullPageParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({
    currX: -1000,
    currY: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const CHARCOAL_SHADES = [
      '#000000', // Pitch-black
      '#09090b', // Ultra-deep zinc
      '#18181b', // Deep charcoal
      '#27272a', // Charcoal grey
      '#3f3f46', // Mid-charcoal
      '#52525b', // Slate grey particle
    ];

    const AMBIENT_COUNT = 95;
    const TOTAL_PARTICLE_COUNT = 2500;
    const particles: Particle[] = [];
    let logoPoints: LogoSamplePoint[] = [];
    let isLogoLoaded = false;

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize 2500 total particles (first 95 ambient, remainder active only during logo assembly)
    for (let i = 0; i < TOTAL_PARTICLE_COUNT; i++) {
      const driftX = Math.random() * width;
      const driftY = Math.random() * height;

      const driftAngle = Math.random() * Math.PI * 2;
      const speed = 0.25 + Math.random() * 0.65;
      const vx = Math.cos(driftAngle) * speed;
      const vy = Math.sin(driftAngle) * speed;

      const size = Math.random() < 0.22 ? Math.random() * 2.3 + 1.2 : Math.random() * 1.3 + 0.55;
      const alpha = i < AMBIENT_COUNT ? (0.42 + Math.random() * 0.06) : 0; // ~45% ambient opacity for background
      const charcoalHex = CHARCOAL_SHADES[Math.floor(Math.random() * CHARCOAL_SHADES.length)];
      const wobbleOffset = Math.random() * Math.PI * 2;
      const wobbleSpeed = 0.02 + Math.random() * 0.03;

      particles.push({
        driftX,
        driftY,
        vx,
        vy,
        size,
        alpha,
        charcoalHex,
        wobbleOffset,
        wobbleSpeed,
        targetRatioX: 0.5,
        targetRatioY: 0.5,
        logoColor: '#f15a24',
      });
    }

    // Load and sample exact pixels & colors from official Clyptus logo (public/logo.png)
    const img = new Image();
    img.src = '/logo.png';
    const assignLogoPoints = () => {
      const sampleW = 498;
      const sampleH = 371;
      const offscreen = document.createElement('canvas');
      offscreen.width = sampleW;
      offscreen.height = sampleH;
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, sampleW, sampleH);
      const imgData = offCtx.getImageData(0, 0, sampleW, sampleH);
      const data = imgData.data;

      const orangeValid: LogoSamplePoint[] = [];
      const blueTextValid: LogoSamplePoint[] = [];

      // Scan logo pixels and separate orange arc vs blue text for balanced particle density
      for (let y = 0; y < sampleH; y += 1) {
        for (let x = 0; x < sampleW; x += 1) {
          const idx = (y * sampleW + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];

          // Filter out transparent and white background pixels
          if (a > 50 && (r < 240 || g < 240 || b < 240)) {
            const isOrange = r > 170 && b < 100;

            // Exclude tiny subtitle area from particle sampling so particles focus 100% on making "Clyptus" crisp
            const isInSubtitleArea = !isOrange && y >= sampleH * 0.67 && x >= sampleW * 0.48;
            if (isInSubtitleArea) {
              continue;
            }

            const pt = {
              xRatio: x / sampleW,
              yRatio: y / sampleH,
              color: isOrange ? '#f15a24' : '#2b3990',
            };

            if (isOrange) {
              orangeValid.push(pt);
            } else {
              blueTextValid.push(pt);
            }
          }
        }
      }

      const totalTarget = TOTAL_PARTICLE_COUNT;
      const blueTargetCount = 1600;
      const orangeTargetCount = totalTarget - blueTargetCount; // 900

      logoPoints = [];

      // 1. Allocate 1600 particles to blue text ("Clyptus" & subtext) for maximum legibility
      if (blueTextValid.length > 0) {
        for (let i = 0; i < blueTargetCount; i++) {
          const pIdx = Math.floor((i / blueTargetCount) * blueTextValid.length);
          logoPoints.push(blueTextValid[pIdx]);
        }
      }

      // 2. Allocate 900 particles to orange C-arc
      if (orangeValid.length > 0) {
        for (let i = 0; i < orangeTargetCount; i++) {
          const pIdx = Math.floor((i / orangeTargetCount) * orangeValid.length);
          logoPoints.push(orangeValid[pIdx]);
        }
      }

      if (logoPoints.length > 0) {
        isLogoLoaded = true;

        // Assign each particle its target logo point
        particles.forEach((p, idx) => {
          const lp = logoPoints[idx % logoPoints.length];
          p.targetRatioX = lp.xRatio;
          p.targetRatioY = lp.yRatio;
          p.logoColor = lp.color;
        });
      }
    };

    if (img.complete) {
      assignLogoPoints();
    } else {
      img.onload = assignLogoPoints;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Check whether target section above FAQ is in view
      const targetEl = document.getElementById('clyptus-logo-assemble-target');
      let assembleFactor = 0;
      let logoBox = { x: 0, y: 0, w: 0, h: 0 };

      if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const vh = height;
        const centerY = rect.top + rect.height * 0.52;
        const screenCenterY = vh * 0.5;
        const distFromCenter = Math.abs(centerY - screenCenterY);
        const maxActiveDist = vh * 0.48;

        if (distFromCenter < maxActiveDist) {
          const rawProgress = 1 - (distFromCenter / maxActiveDist);
          // Hold plateau: 100% assembly is reached earlier and holds steady across a generous scroll range
          const holdThreshold = 0.65;
          const scaledProgress = Math.min(1, Math.max(0, rawProgress / holdThreshold));
          // Smooth ease curve
          assembleFactor = scaledProgress * scaledProgress * (3 - 2 * scaledProgress);
        }

        const maxLogoW = Math.min(rect.width * 0.88, 520);
        const logoW = Math.max(280, maxLogoW);
        const logoH = logoW * (371 / 498);

        logoBox = {
          x: rect.left + (rect.width - logoW) / 2,
          y: rect.top + (rect.height - logoH) / 2 + 10,
          w: logoW,
          h: logoH,
        };
      }

      // Smooth mouse lerp
      if (mouseRef.current.active) {
        mouseRef.current.currX += (mouseRef.current.targetX - mouseRef.current.currX) * 0.1;
        mouseRef.current.currY += (mouseRef.current.targetY - mouseRef.current.currY) * 0.1;
      }

      const activeTextParticles: { x: number; y: number }[] = [];

      particles.forEach((p, idx) => {
        // Continuous organic drifting
        p.driftX += p.vx;
        p.driftY += p.vy;

        // Wrap around viewport edges
        if (p.driftX < -50) p.driftX = width + 50;
        if (p.driftX > width + 50) p.driftX = -50;
        if (p.driftY < -50) p.driftY = height + 50;
        if (p.driftY > height + 50) p.driftY = -50;

        p.wobbleOffset += p.wobbleSpeed;
        const wobbleMag = (1 - assembleFactor * 0.9) * 10;
        const wobbleX = Math.sin(p.wobbleOffset) * wobbleMag;
        const wobbleY = Math.cos(p.wobbleOffset * 0.85) * wobbleMag;

        // If assemble is active and logo is loaded, converge toward logo target coordinates
        let renderX = p.driftX + wobbleX;
        let renderY = p.driftY + wobbleY;

        if (assembleFactor > 0 && isLogoLoaded) {
          const targetX = logoBox.x + p.targetRatioX * logoBox.w;
          const targetY = logoBox.y + p.targetRatioY * logoBox.h;

          renderX = p.driftX + (targetX - p.driftX) * assembleFactor + wobbleX;
          renderY = p.driftY + (targetY - p.driftY) * assembleFactor + wobbleY;
        }

        // Interactive mouse repulsion (disabled when particles are forming Clyptus)
        if (mouseRef.current.active && assembleFactor < 0.95) {
          const mouseFactor = 1 - Math.min(1, assembleFactor * 1.2);
          if (mouseFactor > 0) {
            const dx = renderX - mouseRef.current.currX;
            const dy = renderY - mouseRef.current.currY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const pushRadius = 160;

            if (dist < pushRadius && dist > 0) {
              const force = (pushRadius - dist) / pushRadius;
              const push = Math.pow(force, 1.2) * 30 * mouseFactor;
              renderX += (dx / dist) * push;
              renderY += (dy / dist) * push;
            }
          }
        }

        // Determine particle color (smooth transition from charcoal to logo colors: orange/blue)
        let particleColor = p.charcoalHex;
        if (assembleFactor > 0.2 && isLogoLoaded) {
          particleColor = p.logoColor;
        }

        // Calculate opacity: 95 ambient background particles stay at ~45%; remaining 2405 fade in smoothly during assembly
        let currentAlpha = 0;
        if (idx < AMBIENT_COUNT) {
          currentAlpha = assembleFactor > 0 
            ? Math.min(1, p.alpha + assembleFactor * 0.5) 
            : p.alpha;
        } else {
          currentAlpha = assembleFactor > 0 
            ? Math.pow(assembleFactor, 1.1) * (0.75 + (idx % 10) * 0.025) 
            : 0;
        }

        if (currentAlpha > 0.01) {
          // Increase size for blue text particles so typography is thick and legible
          const isBlueText = p.logoColor === '#2b3990';
          const sizeBoost = isBlueText ? 0.45 : 0.25;
          const currentSize = p.size * (1 + assembleFactor * sizeBoost);

          ctx.save();
          ctx.globalAlpha = currentAlpha;
          ctx.fillStyle = particleColor;
          ctx.beginPath();
          ctx.arc(renderX, renderY, currentSize, 0, Math.PI * 2);
          ctx.fill();

          if (p.size > 1.8 && assembleFactor < 0.5) {
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.arc(renderX, renderY, currentSize * 0.45, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();

          if (assembleFactor > 0.5 && isBlueText) {
            activeTextParticles.push({ x: renderX, y: renderY });
          }
        }
      });

      // Draw subtle connecting strokes between adjacent blue text particles for razor-sharp typography
      if (assembleFactor > 0.55 && activeTextParticles.length > 0) {
        ctx.save();
        ctx.lineWidth = 1.1;
        ctx.strokeStyle = '#2b3990';
        ctx.globalAlpha = Math.min(0.45, (assembleFactor - 0.55) * 1.1);

        for (let i = 0; i < activeTextParticles.length; i += 3) {
          const p1 = activeTextParticles[i];
          for (let j = i + 1; j < Math.min(i + 12, activeTextParticles.length); j++) {
            const p2 = activeTextParticles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < 144) { // dist < 12px
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        ctx.restore();
      }

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
      className="fixed inset-0 w-full h-full pointer-events-none z-0 block" 
    />
  );
};
