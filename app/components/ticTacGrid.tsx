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

    const setCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    interface Point {
      x: number;
      y: number;
    }
    const drawGrid = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = '#15182e';
      ctx.fillRect(0, 0, width, height);
      const cellSize = Math.min(width, height) / 3;

      ctx.strokeStyle = '#2a2f55';
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.moveTo(cellSize, 0);
      ctx.lineTo(cellSize, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cellSize * 2, 0);
      ctx.lineTo(cellSize * 2, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, cellSize);
      ctx.lineTo(width, cellSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, cellSize * 2);
      ctx.lineTo(width, cellSize * 2);
      ctx.stroke();

      return createPathPoints(width, height, cellSize);
    };
    const createPathPoints = (
      width: number,
      height: number,
      cellSize: number
    ): Point[] => {
      const points: Point[] = [];
      const gridLines: Point[][] = [];

      for (let y = 0; y <= 3; y++) {
        const line: Point[] = [];
        for (let x = 0; x <= width; x += 5) {
          line.push({ x, y: y * cellSize });
        }
        gridLines.push(line);
      }

      for (let x = 0; x <= 3; x++) {
        const line: Point[] = [];
        for (let y = 0; y <= height; y += 5) {
          line.push({ x: x * cellSize, y });
        }
        gridLines.push(line);
      }

      points.push(...gridLines[0]);
      points.push(...gridLines[7]);
      points.push(...gridLines[3].slice().reverse());
      points.push(...gridLines[4].slice().reverse());

      points.push(...gridLines[1]);
      points.push(...gridLines[5]);
      points.push(...gridLines[2].slice().reverse());
      points.push(...gridLines[6].slice().reverse());

      return points;
    };

    let position = 0;
    const lineLength = 50;
    const speed = 2;

    const animate = () => {
      const perimeter = drawGrid();
      position = (position + speed) % perimeter.length;

      ctx.beginPath();

      const startPoint = perimeter[position];
      const endPointIndex = (position + lineLength) % perimeter.length;
      const endPoint = perimeter[endPointIndex];

      const gradient = ctx.createLinearGradient(
        startPoint.x,
        startPoint.y,
        endPoint.x,
        endPoint.y
      );

      gradient.addColorStop(0, '#3b82f6');
      gradient.addColorStop(1, '#ffffff');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';

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

      ctx.shadowColor = '#3b82f6';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;

      requestAnimationFrame(animate);
    };

    animate();

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
