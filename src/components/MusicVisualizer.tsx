import React, { useEffect, useRef } from 'react';

interface MusicVisualizerProps {
  isPlaying?: boolean;
  className?: string;
}

const MusicVisualizer: React.FC<MusicVisualizerProps> = ({ 
  isPlaying = true, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bars = 32;
    const barWidth = canvas.width / bars;
    let heights = new Array(bars).fill(0);

    const animate = () => {
      if (!isPlaying) {
        heights = heights.map(h => Math.max(0, h - 2));
      } else {
        heights = heights.map(() => Math.random() * canvas.height * 0.8);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#3B82F6');
      gradient.addColorStop(0.5, '#8B5CF6');
      gradient.addColorStop(1, '#EC4899');

      heights.forEach((height, index) => {
        const x = index * barWidth;
        const y = canvas.height - height;
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth - 2, height);
        
        // Add glow effect
        ctx.shadowColor = '#3B82F6';
        ctx.shadowBlur = 10;
        ctx.fillRect(x, y, barWidth - 2, height);
        ctx.shadowBlur = 0;
      });

      if (isPlaying || heights.some(h => h > 0)) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={60}
      className={`${className}`}
    />
  );
};

export default MusicVisualizer;