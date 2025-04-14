import { NavItemProps } from '../presentation/components/molecules/nav-item/NavItemProps';

const fontLight = 'light: text-black';

export const navItems: NavItemProps[] = [
  {
    label: {
      text: 'About',
      className: fontLight,
      size: 'sm',
    },
    href: '/about',
  },
  {
    label: {
      text: 'Work',
      className: fontLight,
      size: 'sm',
    },
    href: '/work',
    active: true,
  },
  {
    label: {
      text: 'Contact',
      className: fontLight,
      size: 'sm',
    },
    href: '/contact',
  },
];
