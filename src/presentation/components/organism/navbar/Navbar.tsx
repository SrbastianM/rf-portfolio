import React from 'react';
import { NavbarProps } from './NavbarProps';
import NavItem from '../../molecules/nav-item/NavItem';
import { useLocation } from 'react-router';

const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const location = useLocation();

  return (
    <div className="w-full shadow-sm">
      <div className="max-w-full mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Srbastian</div>
        <div className="flex space-x-8">
          {items.map((item, index) => (
            <NavItem key={index} {...item} isActive={location.pathname === item.href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
