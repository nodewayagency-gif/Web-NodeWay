"use client";

import { useEffect, useRef, type RefObject } from "react";

const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

export function useCanvasLoop(
  canvasRef: RefObject<HTMLCanvasElement | null>,
  renderFrame: (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => void,
  deps: unknown[] = []
) {
  const frameRef = useRef(0);
  const timeRef = useRef(0);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let inView = false;
    let pageVisible = !document.hidden;
    let lastFrame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      sizeRef.current = { width: rect.width, height: rect.height };
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { rootMargin: "80px", threshold: 0 }
    );
    observer.observe(canvas);

    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const shouldRender = () => inView && pageVisible && !reducedMotion;

    const loop = (now: number) => {
      frameRef.current = requestAnimationFrame(loop);

      if (!shouldRender()) return;
      if (now - lastFrame < FRAME_INTERVAL) return;

      const delta = (now - lastFrame) / 1000;
      lastFrame = now;
      timeRef.current += delta;

      const { width, height } = sizeRef.current;
      if (width <= 0 || height <= 0) return;

      ctx.clearRect(0, 0, width, height);
      renderFrame(ctx, width, height, timeRef.current);
    };

    if (reducedMotion) {
      resize();
      renderFrame(ctx, sizeRef.current.width, sizeRef.current.height, 0);
    } else {
      frameRef.current = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
