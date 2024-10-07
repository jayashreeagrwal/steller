import React from 'react';

interface CustomizedDotProps {
  cx: number;
  cy: number;
  payload: {
    name: string;
  };
  start: string;
  end: string;
}

const CustomizedDot: React.FC<CustomizedDotProps> = ({ cx, cy, payload, start, end }) => {
  if (payload.name.replace(" ", "").toLowerCase() === start.replace(" ", "").toLowerCase()) {
    return (
      <svg x={cx - 9} y={cy - 9} width={22} height={22} viewBox="0 0 1024 1024" fill="#ff0000" xmlns="http://www.w3.org/2000/svg">
        {/* ... */}
      </svg>
    );
  } else if (payload.name.replace(" ", "").toLowerCase() === end.replace(" ", "").toLowerCase()) {
    return (
      <svg x={cx - 9} y={cy - 9} width={22} height={22} viewBox="0 0 1024 1024" fill="#fffff" xmlns="http://www.w3.org/2000/svg">
        {/* ... */}
      </svg>
    );
  } else {
    return (
      <svg x={cx - 9} y={cy - 9} width={22} height={22} viewBox="0 0 1024 1024" fill="#de89a1" xmlns="http://www.w3.org/2000/svg">
        {/* ... */}
      </svg>
    );
  }
};

export default CustomizedDot;