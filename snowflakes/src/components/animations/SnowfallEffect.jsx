// components/SnowfallEffect.js
"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const SnowfallEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const myCanvas = canvasRef.current;
    const context = myCanvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    // Resize canvas for high DPI screens
    myCanvas.width = window.innerWidth * dpr;
    myCanvas.height = window.innerHeight * dpr;
    context.scale(dpr, dpr);

    // Snowfall logic
    const snowflakes = [];
    const maxSnowflakes = 100;

    for (let i = 0; i < maxSnowflakes; i++) {
      snowflakes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 3 + 2,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random(),
      });
    }

    const drawSnowflakes = () => {
      context.clearRect(0, 0, myCanvas.width, myCanvas.height);
      snowflakes.forEach((flake) => {
        context.beginPath();
        context.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        context.fill();

        // Move flake
        flake.y += flake.speed;

        // Reset flake position if it goes off the screen
        if (flake.y > window.innerHeight) {
          flake.y = -flake.radius;
          flake.x = Math.random() * window.innerWidth;
        }
      });

      requestAnimationFrame(drawSnowflakes);
    };

    drawSnowflakes();

    // Cleanup on unmount
    return () => {
      context.clearRect(0, 0, myCanvas.width, myCanvas.height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default SnowfallEffect;
