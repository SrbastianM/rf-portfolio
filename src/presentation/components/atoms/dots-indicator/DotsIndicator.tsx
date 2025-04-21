import React from 'react';
import { DotsIndicatorProps } from './DotsIndicatorProps';

const DotsIndicator: React.FC<DotsIndicatorProps> = ({ total, actual, onSelect }) => {
  return (
    <div>
      {Array.from({ length: total }).map((_, index) => {
        return (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ml-1 ${
              index === actual ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => onSelect(index)}
            aria-label={`Go to: ${index + 1}`}
          />
        );
      })}
    </div>
  );
};

export default DotsIndicator;
