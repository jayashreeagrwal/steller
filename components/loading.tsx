import React from 'react';
import { Progress } from "@/components/ui/progress"

interface ProgressBarProps {
  progress: number;
}

const ProgressBarComponent: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <Progress
      value={progress}
      max={100}
      className="w-full h-4 rounded-md overflow-hidden"
    >
      <Progress className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" />
    </Progress>
  );
};

export default ProgressBarComponent;