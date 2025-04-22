import { SliderLanguagesProps } from '../presentation/components/organism/slider-languages/SliderLanguagesProps';
import { SiDart, SiGo, SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiKotlin } from 'react-icons/si';

export const sliderItems: SliderLanguagesProps[] = [
  {
    id: 1,
    name: 'JavaScript',
    icon: SiJavascript,
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
  {
    id: 4,
    name: 'Kotlin',
    icon: SiKotlin,
    color: '#7963B0',
    description:
      'Lenguaje moderno y conciso, orientado a objetos y funcional, interoperable con Java.',
  },
  {
    id: 5,
    name: 'Golang',
    icon: SiGo,
    color: '#00ADD8',
    description: 'Lenguaje de programación compilado y concurrente diseñado por Google.',
  },
  {
    id: 6,
    name: 'Dart',
    icon: SiDart,
    color: '#0175C2',
    description:
      'Lenguaje desarrollado por Google, optimizado para interfaces rápidas en múltiples plataformas.',
  },
];
