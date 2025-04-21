import React from 'react';
import { SliderControlProps } from './SliderControlsProps';

const SliderControls: React.FC<SliderControlProps> = ({ onClick, direction }) => {
  return (
    <button
      className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'preview' : 'next'}
    >
      {direction === 'prev' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      )}
    </button>
  );
};

export default SliderControls;
