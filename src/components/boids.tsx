import React, { useEffect, useRef } from 'react';

interface Boid {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const BoidsSimulation: React.FC<{ width?: number; height?: number }> = ({ 
  width = 600, 
  height = 275 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boidsRef = useRef<Boid[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize boids
    const numBoids = 50;
    boidsRef.current = Array.from({ length: numBoids }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));

    // Boids parameters
    const maxSpeed = 2;
    const perceptionRadius = 30;
    const separationRadius = 25;
    const alignmentFactor = 0.04;
    const cohesionFactor = 0.004;
    const separationFactor = 0.04;

    const distance = (b1: Boid, b2: Boid): number => {
      return Math.sqrt((b1.x - b2.x) ** 2 + (b1.y - b2.y) ** 2);
    };

    const limitSpeed = (boid: Boid) => {
      const speed = Math.sqrt(boid.vx ** 2 + boid.vy ** 2);
      if (speed > maxSpeed) {
        boid.vx = (boid.vx / speed) * maxSpeed;
        boid.vy = (boid.vy / speed) * maxSpeed;
      }
    };

    const updateBoid = (boid: Boid, boids: Boid[]) => {
      let alignX = 0, alignY = 0;
      let cohesionX = 0, cohesionY = 0;
      let separationX = 0, separationY = 0;
      let alignCount = 0, cohesionCount = 0, separationCount = 0;

      for (const other of boids) {
        if (other === boid) continue;
        const dist = distance(boid, other);

        // Alignment
        if (dist < perceptionRadius) {
          alignX += other.vx;
          alignY += other.vy;
          alignCount++;
        }

        // Cohesion
        if (dist < perceptionRadius) {
          cohesionX += other.x;
          cohesionY += other.y;
          cohesionCount++;
        }

        // Separation
        if (dist < separationRadius && dist > 0) {
          separationX += (boid.x - other.x) / dist;
          separationY += (boid.y - other.y) / dist;
          separationCount++;
        }
      }

      // Apply alignment
      if (alignCount > 0) {
        alignX /= alignCount;
        alignY /= alignCount;
        boid.vx += (alignX - boid.vx) * alignmentFactor;
        boid.vy += (alignY - boid.vy) * alignmentFactor;
      }

      // Apply cohesion
      if (cohesionCount > 0) {
        cohesionX /= cohesionCount;
        cohesionY /= cohesionCount;
        boid.vx += (cohesionX - boid.x) * cohesionFactor;
        boid.vy += (cohesionY - boid.y) * cohesionFactor;
      }

      // Apply separation
      if (separationCount > 0) {
        boid.vx += separationX * separationFactor;
        boid.vy += separationY * separationFactor;
      }

      limitSpeed(boid);

      // Update position
      boid.x += boid.vx;
      boid.y += boid.vy;

      // Wrap around edges
      if (boid.x < 0) boid.x = width;
      if (boid.x > width) boid.x = 0;
      if (boid.y < 0) boid.y = height;
      if (boid.y > height) boid.y = 0;
    };

    const drawBoid = (boid: Boid) => {
      const angle = Math.atan2(boid.vy, boid.vx);
      const size = 6;

      ctx.save();
      ctx.translate(boid.x, boid.y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(size, 0);
      ctx.lineTo(-size, size / 2);
      ctx.lineTo(-size, -size / 2);
      ctx.closePath();
      ctx.fillStyle = '#60a5fa';
      ctx.fill();
      ctx.strokeStyle = '#93c5fd';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.fillStyle = '#1e3a8a';
      ctx.fillRect(0, 0, width, height);

      for (const boid of boidsRef.current) {
        updateBoid(boid, boidsRef.current);
        drawBoid(boid);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="bg-blue-900 rounded-lg shadow-lg"
    >
      Your browser does not support the canvas element.
    </canvas>
  );
};

export default BoidsSimulation;
