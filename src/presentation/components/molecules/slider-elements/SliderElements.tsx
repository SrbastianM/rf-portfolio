import React, { useRef } from 'react';
import { SliderElementsProps } from './SliderElementsProps';
import Icon from '../../atoms/icon/Icon';

const SliderElements: React.FC<SliderElementsProps> = ({ icon, color, description, isActive }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={elementRef}
      className={`flex flex-col items-center p-6 rounded-xl transition-all ${
        isActive ? 'block' : 'hidden'
      }`}
    >
      <Icon icon={icon} color={color} isActive={isActive} />
      <p className="mt-4 text-center text-gray-700">{description}</p>
    </div>
  );
};

export default SliderElements;
