import React, { useRef } from 'react';
import { IconProps } from './IconProps';

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 80,
  color = 'black',
  isActive = 'false',
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={iconRef}
      className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${isActive ? 'bg-gray-100' : ''}`}
      style={{ color }}
    >
      <div className="text-4xl mb-2">
        <IconComponent size={size} />
      </div>
    </div>
  );
};

export default Icon;
