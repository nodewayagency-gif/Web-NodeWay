"use client";

import { useEffect, useRef } from "react";

// Nao usada no hero mais, mantida para compatibilidade com outras secoes
export function AnimatedSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯";
    let time = 0;

    // Cores da marca Nodeway
    const brandColors = [
      { r: 126, g: 217, b: 87 },  // verde #7ED957
      { r: 0, g: 194, b: 203 },   // ciano #00C2CB
      { r: 0, g: 113, b: 188 },   // azul #0071BC
    ];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(rect.width, rect.height) * 0.45;

      ctx.font = "11px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const points: { x: number; y: number; z: number; char: string; colorT: number }[] = [];

      for (let phi = 0; phi < Math.PI * 2; phi += 0.14) {
        for (let theta = 0; theta < Math.PI; theta += 0.14) {
          const x = Math.sin(theta) * Math.cos(phi + time * 0.4);
          const y = Math.sin(theta) * Math.sin(phi + time * 0.4);
          const z = Math.cos(theta);

          const rotY = time * 0.25;
          const newX = x * Math.cos(rotY) - z * Math.sin(rotY);
          const newZ = x * Math.sin(rotY) + z * Math.cos(rotY);

          const rotX = time * 0.15;
          const newY = y * Math.cos(rotX) - newZ * Math.sin(rotX);
          const finalZ = y * Math.sin(rotX) + newZ * Math.cos(rotX);

          const depth = (finalZ + 1) / 2;
          const charIndex = Math.floor(depth * (chars.length - 1));

          // posicao normalizada para cor (0=verde, 0.5=ciano, 1=azul)
          const colorT = (phi / (Math.PI * 2) + time * 0.05) % 1;

          points.push({
            x: centerX + newX * radius,
            y: centerY + newY * radius,
            z: finalZ,
            char: chars[charIndex],
            colorT,
          });
        }
      }

      points.sort((a, b) => a.z - b.z);

      points.forEach((point) => {
        const alpha = 0.15 + (point.z + 1) * 0.35;

        // Interpolar entre as 3 cores da marca
        const t = point.colorT * 2;
        let r: number, g: number, b: number;
        if (t < 1) {
          r = Math.round(brandColors[0].r + (brandColors[1].r - brandColors[0].r) * t);
          g = Math.round(brandColors[0].g + (brandColors[1].g - brandColors[0].g) * t);
          b = Math.round(brandColors[0].b + (brandColors[1].b - brandColors[0].b) * t);
        } else {
          const t2 = t - 1;
          r = Math.round(brandColors[1].r + (brandColors[2].r - brandColors[1].r) * t2);
          g = Math.round(brandColors[1].g + (brandColors[2].g - brandColors[1].g) * t2);
          b = Math.round(brandColors[1].b + (brandColors[2].b - brandColors[1].b) * t2);
        }

        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fillText(point.char, point.x, point.y);
      });

      time += 0.018;
      frameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}
