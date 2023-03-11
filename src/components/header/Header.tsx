import React from "react";
import StyledHeader from "./Header.style";

// components
import Navlink from "./NavLink";
import SVGImage from "../ui/SVGimage";

// images
import Logo from '@/assets/logo.svg'
import Cart from '@/assets/icon-cart.svg'
import Avatar from '@/assets/image-avatar.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <section className="left">
        <div className="logo">
          <Link to='/'>
            <SVGImage src={Logo} alt="sneaker" />
          </Link>
        </div>
        <Navlink />
      </section>

      <section className="right">
        <div className="cart">
          <Link to='/cart'>
            <SVGImage src={Cart} alt="cart" />
          </Link>
        </div>
        <div className="avatar">
          <Link to='/user'>
            <SVGImage src={Avatar} alt="user" />
          </Link>
        </div>
      </section>
    </StyledHeader>
  );
};

export default Header;
