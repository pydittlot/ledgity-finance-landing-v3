import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export const CobeGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('webgl', {
      antialias: true,
      alpha: true,
    }) as WebGLRenderingContext;

    if (!context) {
      console.error('Failed to get WebGL context');
      return;
    }

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    let phi = 0;
    let animationId: number;

    const globe = createGlobe(context, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
      width,
      height,
      phi: 0,
      theta: 0.25,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      mapBaseBrightness: 0.05,
      baseColor: [0.85, 0.88, 0.95],
      markerColor: [0.114, 0.306, 0.847],
      glowColor: [0.85, 0.88, 0.95],
      markers: [
        // Paris
        { location: [48.8566, 2.3522], size: 0.08 },
        // New York
        { location: [40.7128, -74.006], size: 0.06 },
        // London
        { location: [51.5074, -0.1278], size: 0.06 },
        // Singapore
        { location: [1.3521, 103.8198], size: 0.05 },
        // Tokyo
        { location: [35.6762, 139.6503], size: 0.05 },
        // Zurich
        { location: [47.3769, 8.5417], size: 0.05 },
        // Dubai
        { location: [25.2048, 55.2708], size: 0.04 },
        // Sydney
        { location: [-33.8688, 151.2093], size: 0.04 },
      ],
      onRender: (state: Record<string, number>) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    const handleCanvasResize = () => {
      const newWidth = canvas.clientWidth;
      const newHeight = canvas.clientHeight;
      canvas.width = newWidth * Math.min(window.devicePixelRatio, 2);
      canvas.height = newHeight * Math.min(window.devicePixelRatio, 2);
      globe.resize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleCanvasResize);

    animationId = requestAnimationFrame(() => {
      globe.render();
    });

    const animate = () => {
      globe.render();
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleCanvasResize);
      cancelAnimationFrame(animationId);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-[500px] aspect-square"
    />
  );
};
