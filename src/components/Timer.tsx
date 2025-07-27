'use client';

import { useEffect, useState } from 'react';

interface TimerProps {
  startTime: Date | null;
}

export default function Timer({ startTime }: TimerProps) {
  const [elapsedTime, setElapsedTime] = useState('00:00:00');
  
  useEffect(() => {
    if (!startTime) return;
    
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startTime.getTime();
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setElapsedTime(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    }, 1000);
    
    return () => clearInterval(interval);
  }, [startTime]);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">経過時間</h3>
      <div className="text-2xl font-mono text-gray-800">{elapsedTime}</div>
      <div className="text-xs text-gray-500 mt-1">
        試験時間: 科目A 90分 / 科目B 100分
      </div>
    </div>
  );
}