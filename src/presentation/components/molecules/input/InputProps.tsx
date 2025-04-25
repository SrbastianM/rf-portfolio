import { LabelProps } from '../../atoms/label/LabelProps';

export interface InputProps {
  label?: LabelProps;
  id?: string;
  type: string;
  className?: string;
  placeholder?: string;
  name?: string;
}
