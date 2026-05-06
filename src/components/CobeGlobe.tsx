import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export const CobeGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    const dpr = Math.min(window.devicePixelRatio, 2);

    const createGlobeInstance = (size: number) => {
      if (globeRef.current) globeRef.current.destroy();

      canvas.width = size * dpr;
      canvas.height = size * dpr;

      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: size * dpr,
        height: size * dpr,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.8,
        mapSamples: 20000,
        mapBrightness: 8,
        mapBaseBrightness: 0.08,
        baseColor: [0.9, 0.92, 0.98],
        markerColor: [0.114, 0.306, 0.847],
        glowColor: [0.88, 0.90, 0.97],
        scale: 1,
        offset: [0, 0],
        markers: [
          { location: [48.8566, 2.3522], size: 0.07 },
          { location: [40.7128, -74.006], size: 0.06 },
          { location: [51.5074, -0.1278], size: 0.06 },
          { location: [1.3521, 103.8198], size: 0.05 },
          { location: [35.6762, 139.6503], size: 0.05 },
          { location: [47.3769, 8.5417], size: 0.05 },
          { location: [25.2048, 55.2708], size: 0.04 },
          { location: [-33.8688, 151.2093], size: 0.04 },
          { location: [43.7102, 7.262], size: 0.05 },
        ],
        onRender: (state: Record<string, number>) => {
          state.phi = phi;
          phi += 0.004;
        },
      });
    };

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const size = Math.round(entry.contentRect.width);
        if (size > 0) createGlobeInstance(size);
      }
    });

    ro.observe(canvas);

    return () => {
      ro.disconnect();
      globeRef.current?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
};

export default CobeGlobe;
