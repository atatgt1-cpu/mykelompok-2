import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  speed: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Star collection
    let stars: Star[] = [];
    let meteors: Meteor[] = [];

    const colors = [
      "rgba(215, 235, 255,",
      "rgba(148, 210, 255,",
      "rgba(86, 232, 255,",
      "rgba(196, 181, 253,"
    ];

    const initCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Star count based on screen area (balanced for performance)
      const starCount = Math.min(220, Math.floor((width * height) / 7500));
      stars = Array.from({ length: starCount }, () => {
        const baseAlpha = Math.random() * 0.7 + 0.25;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 2 + 0.5,
          radius: Math.random() * 1.3 + 0.3,
          alpha: baseAlpha,
          baseAlpha,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          speed: Math.random() * 0.25 + 0.05,
          color: colors[Math.floor(Math.random() * colors.length)]
        };
      });

      meteors = [];
    };

    initCanvas();

    const spawnMeteor = () => {
      if (reduceMotion || meteors.length >= 2) return;
      if (Math.random() < 0.02) {
        meteors.push({
          x: Math.random() * width * 0.8,
          y: Math.random() * (height * 0.4),
          length: Math.random() * 100 + 60,
          speed: Math.random() * 8 + 7,
          angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1),
          alpha: 1,
          active: true
        });
      }
    };

    let tick = 0;
    const render = () => {
      tick++;
      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Parallax offsets
      const offsetX = (mouseRef.current.x - width / 2) * 0.02;
      const offsetY = (mouseRef.current.y - height / 2) * 0.02;

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!reduceMotion) {
          star.y += star.speed;
          if (star.y > height + 5) {
            star.y = -5;
            star.x = Math.random() * width;
          }
          star.alpha = star.baseAlpha + Math.sin(tick * star.twinkleSpeed) * 0.2;
        }

        const renderX = star.x + offsetX * star.z;
        const renderY = star.y + offsetY * star.z;

        ctx.beginPath();
        ctx.fillStyle = `${star.color} ${Math.max(0.1, Math.min(1, star.alpha))})`;
        ctx.arc(renderX, renderY, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra stellar glow on larger stars
        if (star.radius > 1.2 && star.alpha > 0.6) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(86, 232, 255, ${star.alpha * 0.25})`;
          ctx.arc(renderX, renderY, star.radius * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Meteors
      spawnMeteor();
      for (let j = meteors.length - 1; j >= 0; j--) {
        const m = meteors[j];
        if (!m.active) {
          meteors.splice(j, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${m.alpha})`);
        grad.addColorStop(0.3, `rgba(86, 232, 255, ${m.alpha * 0.8})`);
        grad.addColorStop(1, "rgba(86, 232, 255, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= 0.015;

        if (m.alpha <= 0 || m.x > width + 100 || m.y > height + 100) {
          m.active = false;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    let resizeTimer: number;
    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        initCanvas();
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Nebula Atmospheric Gradients */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-900/15 blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-purple-900/15 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full bg-blue-950/25 blur-[160px] pointer-events-none" />
      
      {/* High-Performance Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Subtle fine cosmic dust overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#030712]/40 to-[#030712] pointer-events-none" />
    </div>
  );
};
