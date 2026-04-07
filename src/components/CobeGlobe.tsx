import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export const CobeGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let phi = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
      width: canvas.offsetWidth * 2,
      height: canvas.offsetHeight * 2,
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
        { location: [48.8566, 2.3522], size: 0.08 },
        { location: [40.7128, -74.006], size: 0.06 },
        { location: [51.5074, -0.1278], size: 0.06 },
        { location: [1.3521, 103.8198], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [47.3769, 8.5417], size: 0.05 },
        { location: [25.2048, 55.2708], size: 0.04 },
        { location: [-33.8688, 151.2093], size: 0.04 },
      ],
      onRender: (state: Record<string, number>) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
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

export default CobeGlobe;
