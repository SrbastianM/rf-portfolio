import { SliderLanguagesProps } from '../presentation/components/organism/slider-languages/SliderLanguagesProps';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';

export const sliderItems: SliderLanguagesProps[] = [
  {
    id: 1,
    name: 'JavaScript',
    icon: IoLogoJavascript,
    color: '#F7DF1E',
    description: 'Lenguaje de programación interpretado, dialecto del estándar ECMAScript.',
  },
  {
    id: 2,
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
    description:
      'Superconjunto de JavaScript que añade tipado estático y objetos basados en clases.',
  },
  {
    id: 3,
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
    description: 'Biblioteca JavaScript para construir interfaces de usuario con componentes.',
  },
];
