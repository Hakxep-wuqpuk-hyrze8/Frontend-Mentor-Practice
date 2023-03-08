import React from "react";

// components
import Navlink from "./NavLink";
import SVGImage from "../ui/SVGimage";

// images
import Logo from '@/assets/logo.svg'
import Cart from '@/assets/icon-cart.svg'
import Avatar from '@/assets/image-avatar.png'

const Header = () => {
  return (
    <div className="header">
      <SVGImage src={Logo} alt="sneaker" />
      <Navlink />
      <SVGImage src={Cart} alt="cart" />
      <SVGImage src={Avatar} alt="user" />
    </div>
  );
};

export default Header;
