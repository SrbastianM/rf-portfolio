import React from 'react';
import { NavbarProps } from './NavbarProps';
import NavItem from '../../molecules/nav-item/NavItem';

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <div className="w-full shadow-sm">
      <div className="max-w-full mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Srbastian</div>
        <div className="flex space-x-8">
          {items.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
