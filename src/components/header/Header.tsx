import React from "react";
import StyledHeader from "./Header.style";

// components
import Navlink from "./NavLink";
import SVGImage from "../ui/SVGimage";

// images
import Logo from '@/assets/logo.svg'
import Cart from '@/assets/icon-cart.svg'
import Avatar from '@/assets/image-avatar.png'

const Header = () => {
  return (
    <StyledHeader>
      <section className="left">
        <div className="logo">
          <SVGImage src={Logo} alt="sneaker" />
        </div>
        <Navlink />
      </section>

      <section className="right">
        <div className="cart">
          <SVGImage src={Cart} alt="cart" />
        </div>
        <div className="avatar">
          <SVGImage src={Avatar} alt="user" />
        </div>
      </section>
    </StyledHeader>
  );
};

export default Header;
