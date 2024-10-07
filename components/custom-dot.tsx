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
      <svg x={cx - 9} y={cy - 9} width={22} height={22} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path d="M400 100C400 265.685 534.313 400 700 400C534.313 400 400 534.313 400 700C400 534.313 265.685 400 100 400C265.685 400 400 265.685 400 100Z" stroke="#DE89A1" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
<g clip-path="url(#clip0_558_2)">
<path d="M400 109C400 274.685 534.313 409 700 409C534.313 409 400 543.313 400 709C400 543.313 265.685 409 100 409C265.685 409 400 274.685 400 109Z" fill="#DE89A1"/>
</g>
<defs>
<clipPath id="clip0_558_2">
<rect width="600" height="600" fill="white" transform="translate(100 109)"/>
</clipPath>
</defs>
      </svg>
    );
  } else if (payload.name.replace(" ", "").toLowerCase() === end.replace(" ", "").toLowerCase()) {
    return (
      <svg x={cx - 9} y={cy - 9} width={22} height={22} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
       <path d="M400 100C400 265.685 534.313 400 700 400C534.313 400 400 534.313 400 700C400 534.313 265.685 400 100 400C265.685 400 400 265.685 400 100Z" stroke="#97D6CF" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
<g clip-path="url(#clip0_575_5)">
<path d="M400 109C400 274.685 534.313 409 700 409C534.313 409 400 543.313 400 709C400 543.313 265.685 409 100 409C265.685 409 400 274.685 400 109Z" fill="#97D6CF"/>
</g>
<defs>
<clipPath id="clip0_575_5">
<rect width="600" height="600" fill="white" transform="translate(100 109)"/>
</clipPath>
</defs>
      </svg>
    );
  } else {
    return (
      <svg x={cx - 9} y={cy - 9} width={22} height={22} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path d="M400 100C400 265.685 534.313 400 700 400C534.313 400 400 534.313 400 700C400 534.313 265.685 400 100 400C265.685 400 400 265.685 400 100Z" stroke="#FFBF00" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
<g clip-path="url(#clip0_575_9)">
<path d="M400 109C400 274.685 534.313 409 700 409C534.313 409 400 543.313 400 709C400 543.313 265.685 409 100 409C265.685 409 400 274.685 400 109Z" fill="#FFBF00"/>
</g>
<defs>
<clipPath id="clip0_575_9">
<rect width="600" height="600" fill="white" transform="translate(100 109)"/>
</clipPath>
</defs>
      </svg>
    );
  }
};

export default CustomizedDot;