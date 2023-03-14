import React from "react";
import { Link } from "react-router-dom";
import StyledHeader from "./Header.style";

// components
import Navlink from "./navLink";
import SVGImage from "../ui/SVGimage";

// images
import Logo from '@/assets/logo.svg'
import Cart from '@/assets/icon-cart.svg'
import Avatar from '@/assets/image-avatar.png'
import Menu from '@/assets/icon-menu.svg';

// redux
import { useAppDispatch } from './../../app/hooks';
import { toggleSidebar } from "@/feature/sidebar/sidebarSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleMenuClick = () => {
    console.log('0.0');
    dispatch(toggleSidebar());
  }

  return (
    <StyledHeader>
      <section className="left">

        <button className="menu" type="button" onClick={handleMenuClick}>
          <SVGImage src={Menu} alt="menu" />
        </button>

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
            <img src={Avatar} alt="user" />
          </Link>
        </div>
      </section>
    </StyledHeader >
  );
};

export default Header;
