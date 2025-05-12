import React from "react";

interface ProgressProps {
  value: number;
}

const Progress: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
      <div
        className="h-full bg-primary rounded-full transition-width duration-300 ease-in-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default Progress;
