import React, { useRef } from 'react';
import Paragraph from '../../atoms/paragraph/Paragraph';
import Title from '../../atoms/title/Title';
import Button from '../button/Button';
import { TextGroupProps } from './TextGroupProps';
import useTypewriterAnimation from '../../../hooks/useTypeWriterAnimation';
import { useNavigate } from 'react-router';

const TextGroup: React.FC<TextGroupProps> = ({ paragraph, button, title }) => {
  const {
    text = '',
    speed = 25,
    delay = 0,
    id = '',
    animated = false,
    ...restParagraph
  } = paragraph;

  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();

  useTypewriterAnimation(paragraphRef as React.RefObject<HTMLElement>, {
    text,
    speed,
    delay,
    shouldAnimate: animated,
  });

  return (
    <div className="w-full px-2 md:px-4">
      <Title className="text-left mb-4 md:mb-8 lg:mb-14" {...title} />
      <Paragraph ref={paragraphRef} id={id} className="text-sm md:text-base" {...restParagraph} />
      <div className="flex mt-4 md:mt-6">
        <Button
          {...button}
          onClick={() => {
            button?.to && navigate(button.to);
            button?.onClick;
          }}
        />
      </div>
    </div>
  );
};

export default TextGroup;
