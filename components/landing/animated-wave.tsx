"use client";

import { useCallback, useRef } from "react";
import { useCanvasLoop } from "@/hooks/use-canvas-loop";

const CHARS = "·∘○◯◌●◉";
const CELL = 28;

export function AnimatedWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const renderFrame = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      ctx.font = "14px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const cols = Math.floor(width / CELL);
      const rows = Math.floor(height / CELL);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = (x + 0.5) * (width / cols);
          const py = (y + 0.5) * (height / rows);

          const wave1 = Math.sin(x * 0.2 + time * 2) * Math.cos(y * 0.15 + time);
          const wave2 = Math.sin((x + y) * 0.1 + time * 1.5);
          const wave3 = Math.cos(x * 0.1 - y * 0.1 + time * 0.8);

          const normalized = (wave1 + wave2 + wave3) / 3 * 0.5 + 0.5;
          const charIndex = Math.floor(normalized * (CHARS.length - 1));
          const alpha = 0.15 + normalized * 0.5;

          ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
          ctx.fillText(CHARS[charIndex], px, py);
        }
      }
    },
    []
  );

  useCanvasLoop(canvasRef, renderFrame);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
      aria-hidden
    />
  );
}
