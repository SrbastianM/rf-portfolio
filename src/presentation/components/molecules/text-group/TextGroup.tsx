// src/molecules/text-group/TextGroup.tsx
import React, { useRef } from 'react';
import Paragraph from '../../atoms/paragraph/Paragraph';
import Title from '../../atoms/title/Title';
import Button from '../button/Button';
import { TextGroupProps } from './TextGroupProps';
import useTypewriterAnimation from '../../../hooks/useTypeWriterAnimation';

const TextGroup: React.FC<TextGroupProps> = ({ paragraph, button, title }) => {
  const {
    text = '',
    speed = 50,
    delay = 0,
    id = '',
    animated = false,
    ...restParagraph
  } = paragraph;

  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useTypewriterAnimation(paragraphRef as React.RefObject<HTMLElement>, {
    text,
    speed,
    delay,
    shouldAnimate: animated,
  });

  return (
    <div className="max-w-screen-xl ml-10">
      <Title className="text-left mb-14" {...title} />
      <Paragraph ref={paragraphRef} id={id} {...restParagraph} />
      <div className="flex left-0 mt-4">
        <Button {...button} />
      </div>
    </div>
  );
};

export default TextGroup;
