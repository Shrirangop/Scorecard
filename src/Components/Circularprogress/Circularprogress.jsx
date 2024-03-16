import React from 'react';

const CircularProgressBar = ({ size, progress, strokeWidth, circleOneStroke, circleTwoStroke }) => {
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = ((100 - progress) / 100) * circumference;

  return (
    <svg width={size} height={size} className="mx-auto">
      <circle
        className="text-gray-300"
        stroke={circleOneStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
      > 
      </circle>
      <circle
        className="text-blue-500"
        stroke={circleTwoStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        fill="none"
        transform={`rotate(-90 ${center} ${center})`}
      />

      <text
        x={center}
        y={center}
        className="text-xl font-semibold"
        fill="currentColor"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {progress}%
      </text>

    </svg>
  );
};

export default CircularProgressBar;
