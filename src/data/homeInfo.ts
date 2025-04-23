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
        text: "Hello to everyone my name is Sebastian, a software developer who enjoys open source and constantly learns about the internet and how it's evolving.",
        fontWeight: 'lighter',
        fontSize: 'text-lg',
        className: "text-wrap w-2xl mr-10"
      },
      button: {
        className: 'px-14 py-6 mt-6',
        size: 'sm',
        text: 'Contact',
        color: 'black',
      },
    },
    image: {
      src: profile,
      alt: 'Profile image of Sebastian',
      className: 'object-cover ml-10',
    },
  },
];
