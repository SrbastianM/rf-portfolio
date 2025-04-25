import { InputProps } from '../presentation/components/molecules/input/InputProps';

const labelStyle = 'text-left mb-2';

export const contactInfo: InputProps[] = [
  {
    label: {
      text: 'Name',
      color: 'black',
      className: labelStyle,
      size: 'lg',
    },
    id: 'name-input',
    placeholder: 'Put Your Name',
    type: 'text',
    className: 'border w-3xl h-10 p-4',
    name: 'name',
  },
  {
    label: {
      text: 'Email',
      color: 'black',
      size: 'md',
      className: `${labelStyle} mt-2`,
    },
    id: 'email-input',
    placeholder: 'Put Your Email',
    className: 'border w-3xl h-10 p-4',
    type: 'email',
    name: 'email',
  },
];
