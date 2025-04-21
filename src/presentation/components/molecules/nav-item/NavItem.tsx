import React from 'react';
import { NavItemProps } from './NavItemProps';
import Icon from '../../atoms/icon/Icon';
import Label from '../../atoms/label/Label';
Icon;

const NavItem: React.FC<NavItemProps> = ({ label, icon, href = '#', active }) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-sm transition hover:bg-blue-100 ${
        active ? 'bg-indigo-50' : 'text-gray-700'
      }`}
    >
      {icon && <Icon {...icon} />}
      <Label {...label} />
    </a>
  );
};

export default NavItem;
