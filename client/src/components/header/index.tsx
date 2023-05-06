import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "@/style/breakpoints";

// components
import Navlink from "./NavLink/index";
import SVGImage from "../ui/SVGimage";

// images
import Logo from '@/assets/logo.svg'
import Cart from '@/assets/icon-cart.svg'
import Avatar from '@/assets/image-avatar.png'
import Menu from '@/assets/icon-menu.svg';

// redux
import { useAppDispatch } from '../../app/hooks';
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


const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  height: 15vh;
  margin: 0 auto;

  user-select: none;

  // 分成左右部分
  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 3em;
  }

  // component
  .logo {
    inline-size: 10em;
    margin-inline-end: 4em;
    cursor: pointer;
  }
  .cart {
    cursor: pointer;
  }
  .avatar {
    inline-size: 3.5em;
    cursor: pointer;

    &:hover,
    &:active {
      outline: 2px ${props => props.theme.colors.primary} solid;
      outline-offset: -2px;
      border-radius: 50%;
    }
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    margin-inline-end: 1em;
    background-color: inherit;
    scale: 1.2;

    @media ${device.lg} {
      display: none;
    }
  }

  // header 下的線條
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.05em;
    border-radius: ${props => props.theme.border.radius};
    background-color: ${props => props.theme.colors.lightBoxBg};
    transition: ${props => props.theme.transition.default};
  }
`;