import { ParagraphProps } from '../../atoms/paragraph/ParagraphProps';
import { TitleProps } from '../../atoms/title/TitleProps';
import { ButtonProps } from '../button/ButtonProps';

export interface TextGroupProps {
  paragraph: ParagraphProps & {
    text: string;
    speed?: number;
    delay?: number;
  };
  title: TitleProps;
  button?: ButtonProps;
  shouldAnimate?: boolean;
}
