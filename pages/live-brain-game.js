import { useEffect, useState } from 'react';

export default function LiveBrainGame() {
  const totalTime = 15 * 60; // 15 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    return `00:${m}:${s}`;
  };

  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className="min-h-screen bg-red-600 text-white flex flex-col items-center justify-center relative px-6">
      <p className="text-lg mb-4 mt-20">Pls wait game will start</p>

      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Dotted circle */}
        <svg className="absolute w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="115"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 10"
            fill="none"
          />
        </svg>

        {/* Animated progress circle */}
        <svg className="absolute w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="115"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={2 * Math.PI * 115}
            strokeDashoffset={2 * Math.PI * 115 * (1 - progress / 100)}
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>

        {/* Time Display */}
        <div className="text-4xl font-bold">{formatTime(timeLeft)}</div>
      </div>

      <p className="absolute bottom-16 text-white underline">Terms & Conditions</p>
    </div>
  );
}
