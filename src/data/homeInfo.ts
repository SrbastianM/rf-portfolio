import { HeroItemProps } from '../presentation/components/organism/hero-section/HeroSectionProps';
import profile from '../assets/profile.jpeg';

export const homeInfo: HeroItemProps[] = [
  {
    textGroup: {
      title: {
        text: 'Sebastian Rodriguez Murillo',
        fontSize: 'text-5xl',
        fontType: 'font-bold',
        color: '',
        className: 'text-left mb-14',
      },
      paragraph: {
        text: "Hello everyone, my name is Sebastian. I'm a QA Automation Engineer interested in open source and continuously learning about modern web technologies.",
        fontWeight: 'lighter',
        fontSize: 'text-lg',
        className: 'text-wrap max-w-2xl',
      },
      button: {
        className: 'px-14 py-6 mt-6',
        size: 'sm',
        text: 'Contact',
        color: 'black',
        to: '/contact',
      },
    },
    image: {
      src: profile,
      alt: 'Profile image of Sebastian',
      className: 'object-cover ml-10',
    },
  },
];
