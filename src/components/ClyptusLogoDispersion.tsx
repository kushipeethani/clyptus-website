import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import logoImg from '../assets/logo.png';

interface Particle {
  x: number;
  y: number;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  dispersedX: number;
  dispersedY: number;
  color: string;
  size: number;
  delay: number;
}

interface ClyptusLogoDispersionProps {
  autoStart?: boolean;
  onDispersionComplete?: () => void;
  onAssemblyComplete?: () => void;
  width?: number;
  height?: number;
}

export const ClyptusLogoDispersion: React.FC<ClyptusLogoDispersionProps> = ({
  autoStart = false,
  onDispersionComplete,
  onAssemblyComplete,
  width = 600,
  height = 300,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDispersed, setIsDispersed] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const particlesRef = useRef<Particle[]>([]);
  const animProgressRef = useRef<{ value: number }>({ value: 0 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 2, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = logoImg;

    img.onload = () => {
      const offCanvas = document.createElement('canvas');
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      const logoWidth = width * 0.75;
      const logoHeight = (img.height / img.width) * logoWidth;
      offCanvas.width = logoWidth;
      offCanvas.height = logoHeight;

      offCtx.drawImage(img, 0, 0, logoWidth, logoHeight);
      const imgData = offCtx.getImageData(0, 0, logoWidth, logoHeight).data;

      const offsetX = (width - logoWidth) / 2;
      const offsetY = (height - logoHeight) / 2;

      const particles: Particle[] = [];
      const step = 2; // Pixel sampling density

      for (let y = 0; y < logoHeight; y += step) {
        for (let x = 0; x < logoWidth; x += step) {
          const index = (Math.floor(y) * logoWidth + Math.floor(x)) * 4;
          const alpha = imgData[index + 3];

          if (alpha > 80) {
            const r = imgData[index];
            const g = imgData[index + 1];
            const isOrange = r > 160 && g < 130;

            const angle = Math.random() * Math.PI * 2;
            const distance = 180 + Math.random() * 220;

            const targetX = offsetX + x;
            const targetY = offsetY + y;

            const dispersedX = width / 2 + Math.cos(angle) * distance;
            const dispersedY = height / 2 + Math.sin(angle) * distance;

            particles.push({
              x: targetX,
              y: targetY,
              startX: targetX,
              startY: targetY,
              targetX,
              targetY,
              dispersedX,
              dispersedY,
              color: isOrange ? '#EA580C' : '#2D2A85',
              size: isOrange ? 1.4 : 1.1,
              delay: Math.random() * 0.4,
            });
          }
        }
      }

      particlesRef.current = particles;

      // Draw initial assembled logo state
      renderParticles(0);

      if (autoStart) {
        triggerDispersion();
      }
    };

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [width, height, autoStart]);

  const renderParticles = (progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const particles = particlesRef.current;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Calculate position based on progress (0 = Assembled at target, 1 = Dispersed outward)
      const localP = Math.max(0, Math.min(1, (progress - p.delay) / 0.6));
      const eased = Math.pow(localP, 2); // Accelerate outward explosion

      p.x = p.targetX + (p.dispersedX - p.targetX) * eased;
      p.y = p.targetY + (p.dispersedY - p.targetY) * eased;

      const alpha = 1 - localP * 0.85;

      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * (1 + localP * 0.5), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;
  };

  // Trigger Outward Particle Explosion (Logo -> Dispersed Particles)
  const triggerDispersion = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    gsap.to(animProgressRef.current, {
      value: 1,
      duration: 1.8,
      ease: 'power3.out',
      onUpdate: () => {
        renderParticles(animProgressRef.current.value);
      },
      onComplete: () => {
        setIsAnimating(false);
        setIsDispersed(true);
        if (onDispersionComplete) onDispersionComplete();
      },
    });
  };

  // Trigger Inward Particle Re-assembly (Dispersed Particles -> Logo)
  const triggerAssembly = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    gsap.to(animProgressRef.current, {
      value: 0,
      duration: 1.0,
      ease: 'power2.inOut',
      onUpdate: () => {
        renderParticles(animProgressRef.current.value);
      },
      onComplete: () => {
        setIsAnimating(false);
        setIsDispersed(false);
        if (onAssemblyComplete) onAssemblyComplete();
      },
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4">
      <canvas
        ref={canvasRef}
        style={{ width: `${width}px`, height: `${height}px` }}
        className="cursor-pointer"
        onClick={() => {
          if (isDispersed) triggerAssembly();
          else triggerDispersion();
        }}
      />

      {/* Control Action Buttons */}
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={triggerDispersion}
          disabled={isAnimating || isDispersed}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-mono text-xs font-bold shadow-md hover:scale-105 disabled:opacity-40 transition-all"
        >
          💥 Disperse Logo
        </button>

        <button
          onClick={triggerAssembly}
          disabled={isAnimating || !isDispersed}
          className="px-4 py-2 rounded-full bg-slate-900 text-white font-mono text-xs font-bold shadow-md hover:scale-105 disabled:opacity-40 transition-all"
        >
          ✨ Re-assemble Logo
        </button>
      </div>
    </div>
  );
};

export default ClyptusLogoDispersion;
