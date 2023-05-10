import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { device } from '@/style/breakpoints';
import { links } from "@/data/links";
import { StyledLink } from "../../ui/Button/Button.style";
import { linkType } from "@/types/link";
import { useLocation } from "react-router-dom";

const Navlink: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>();

  const location = useLocation();

  useEffect(() => {
    links.forEach((link) => {
      if (link.url !== location.pathname) {
        setActiveLink(0);
      }
    })
  }, [location])

  const handleClick = (
    id: number
  ) => {
    setActiveLink(id);
  };

  return (
    <StyledNavLink>
      {links.map((link: linkType) => {
        const { id, text, url } = link;
        return (
          <StyledLink
            className={`"underline-link 
              ${activeLink === id ? "active" : null}`}
            onClick={() => handleClick(id)}
            key={id}
            to={url}
          >
            {text}
          </StyledLink>
        );
      })}
    </StyledNavLink>
  );
};

export default Navlink;

const StyledNavLink = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 40vw;
  max-inline-size: 35em;
  gap: 1em;
  
  background-color: ${props => props.theme.colors.backgroundColor};

  // 可以分開成一個 module
  .underline-link:active::after,
  .underline-link:hover::after,
  .active::after {
    content: '';
    position: absolute;
    top: 8vh;
    width: 100%;
    height: 0.22em;
    border-radius: ${props => props.theme.border.radius};
    background-color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transition.default};
  }

  @media ${device.xs} {
    display: none;
  }

  @media ${device.lg} {
    display: flex;
    gap: 2em;
  }
`;