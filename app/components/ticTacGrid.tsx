'use client';
import React from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TicTacGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Define point interface for type safety
    interface Point {
      x: number;
      y: number;
    }

    // Define the grid pattern
    const drawGrid = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw background
      ctx.fillStyle = '#15182e';
      ctx.fillRect(0, 0, width, height);

      // Calculate grid cell size
      const cellSize = Math.min(width, height) / 3;

      // Draw grid lines (# pattern)
      ctx.strokeStyle = '#2a2f55';
      ctx.lineWidth = 3;

      // Vertical lines
      ctx.beginPath();
      ctx.moveTo(cellSize, 0);
      ctx.lineTo(cellSize, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cellSize * 2, 0);
      ctx.lineTo(cellSize * 2, height);
      ctx.stroke();

      // Horizontal lines
      ctx.beginPath();
      ctx.moveTo(0, cellSize);
      ctx.lineTo(width, cellSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, cellSize * 2);
      ctx.lineTo(width, cellSize * 2);
      ctx.stroke();

      // Create path points along the grid lines
      return createPathPoints(width, height, cellSize);
    };

    // Create points that follow the grid lines
    const createPathPoints = (
      width: number,
      height: number,
      cellSize: number
    ): Point[] => {
      const points: Point[] = [];
      const gridLines: Point[][] = [];

      // Define the grid lines as sequences of points

      // Horizontal lines (including top and bottom edges)
      for (let y = 0; y <= 3; y++) {
        const line: Point[] = [];
        for (let x = 0; x <= width; x += 5) {
          line.push({ x, y: y * cellSize });
        }
        gridLines.push(line);
      }

      // Vertical lines (including left and right edges)
      for (let x = 0; x <= 3; x++) {
        const line: Point[] = [];
        for (let y = 0; y <= height; y += 5) {
          line.push({ x: x * cellSize, y });
        }
        gridLines.push(line);
      }

      // Flatten all lines into a single path that traverses the entire grid
      // Start with top edge, right edge, bottom edge (reversed), left edge (reversed)
      points.push(...gridLines[0]); // Top edge
      points.push(...gridLines[7]); // Right edge
      points.push(...gridLines[3].slice().reverse()); // Bottom edge (reversed)
      points.push(...gridLines[4].slice().reverse()); // Left edge (reversed)

      // Then add internal horizontal and vertical lines
      points.push(...gridLines[1]); // First horizontal internal line
      points.push(...gridLines[5]); // First vertical internal line from bottom
      points.push(...gridLines[2].slice().reverse()); // Second horizontal internal line (reversed)
      points.push(...gridLines[6].slice().reverse()); // Second vertical internal line from bottom (reversed)

      return points;
    };

    // Animation variables
    let position = 0;
    const lineLength = 50; // Length of the colored line
    const speed = 2; // Speed of movement
    const perimeter = drawGrid();

    // Animation function
    const animate = () => {
      // Redraw the grid
      const perimeter = drawGrid();

      // Calculate current position and draw the line
      position = (position + speed) % perimeter.length;

      // Draw a line segment along the path
      ctx.beginPath();

      // Use a gradient for the line
      const startPoint = perimeter[position];
      const endPointIndex = (position + lineLength) % perimeter.length;
      const endPoint = perimeter[endPointIndex];

      const gradient = ctx.createLinearGradient(
        startPoint.x,
        startPoint.y,
        endPoint.x,
        endPoint.y
      );

      gradient.addColorStop(0, '#3b82f6'); // Blue
      gradient.addColorStop(1, '#ffffff'); // Red

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';

      // Draw the line segment
      for (let i = 0; i < lineLength; i++) {
        const idx = (position + i) % perimeter.length;
        const nextIdx = (position + i + 1) % perimeter.length;

        if (i === 0) {
          ctx.moveTo(perimeter[idx].x, perimeter[idx].y);
        } else {
          ctx.lineTo(perimeter[nextIdx].x, perimeter[nextIdx].y);
        }
      }

      ctx.stroke();

      // Add glow effect
      ctx.shadowColor = '#3b82f6';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Continue animation
      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className='md:w-1/2 flex justify-center items-center'
    >
      <div className='relative w-64 h-64 md:w-80 md:h-80'>
        <canvas ref={canvasRef} className='w-full h-full rounded-lg' />
      </div>
    </motion.div>
  );
};

export default TicTacGrid;
