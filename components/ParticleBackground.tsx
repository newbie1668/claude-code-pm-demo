"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  isBlue: boolean;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const mouse = { x: -9999, y: -9999 };
    let animId: number;

    // Build grid of particles
    const COLS = 18;
    const ROWS = 10;
    const particles: Particle[] = [];

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        // Add some randomness to the grid positions
        const jitterX = (Math.random() - 0.5) * (width / COLS) * 0.6;
        const jitterY = (Math.random() - 0.5) * (height / ROWS) * 0.6;
        const ox = (c / (COLS - 1)) * width + jitterX;
        const oy = (r / (ROWS - 1)) * height + jitterY;
        particles.push({
          x: ox,
          y: oy,
          originX: ox,
          originY: oy,
          vx: 0,
          vy: 0,
          size: Math.random() * 1.8 + 0.8,
          isBlue: Math.random() > 0.82,
        });
      }
    }

    // Extra scattered particles
    for (let i = 0; i < 40; i++) {
      const ox = Math.random() * width;
      const oy = Math.random() * height;
      particles.push({
        x: ox, y: oy,
        originX: ox, originY: oy,
        vx: 0, vy: 0,
        size: Math.random() * 1.5 + 0.5,
        isBlue: Math.random() > 0.88,
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const REPEL = 110;

        if (dist < REPEL && dist > 0) {
          const force = ((REPEL - dist) / REPEL) * 2.5;
          p.vx -= (dx / dist) * force;
          p.vy -= (dy / dist) * force;
        }

        // Spring back to origin
        p.vx += (p.originX - p.x) * 0.04;
        p.vy += (p.originY - p.y) * 0.04;

        // Damping
        p.vx *= 0.85;
        p.vy *= 0.85;

        p.x += p.vx;
        p.y += p.vy;

        ctx!.beginPath();
        // Draw as a small elongated dash (like in the reference image)
        ctx!.save();
        const angle = Math.atan2(p.vy + 0.001, p.vx + 0.001);
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const stretch = Math.min(speed * 1.5, 4);
        ctx!.translate(p.x, p.y);
        ctx!.rotate(angle);
        ctx!.scale(1 + stretch, 1);
        ctx!.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx!.restore();

        if (p.isBlue) {
          ctx!.fillStyle = "rgba(59,79,212,0.75)";
        } else {
          ctx!.fillStyle = "rgba(160,160,185,0.45)";
        }
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%", zIndex: 0 }}
    />
  );
}
