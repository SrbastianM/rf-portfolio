import React from 'react';
import Paragraph from '../../atoms/paragraph/Paragraph';
import Title from '../../atoms/title/Title';
import Button from '../button/Button';
import { TextGroupProps } from './TextGroupProps';

const TextGroup: React.FC<TextGroupProps> = ({ paragraph, button, title }) => {
  return (
    <div className="max-w-lg ml-10">
      <Title className="text-left mb-14" {...title} />
      <Paragraph {...paragraph} />
      <div className="flex left-0 mt-4">
        <Button {...button} />
      </div>
    </div>
  );
};

export default TextGroup;
