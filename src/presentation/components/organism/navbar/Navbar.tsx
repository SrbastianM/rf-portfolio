import React from "react";
import { NavbarProps } from "./NavbarProps";
import NavItem from "../../molecules/nav-item/NavItem";

const Navbar : React.FC<NavbarProps> = ({items}) => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex gap-6 items-cente">
      {items.map((item, index) => (
        <NavItem key={index} {...item}/>
      ))}
    </nav>
  )
}

export default Navbar