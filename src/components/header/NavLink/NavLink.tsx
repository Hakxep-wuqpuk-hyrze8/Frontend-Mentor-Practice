import React, { useEffect, useState } from "react";
import { links } from "@/data/links";
import { StyledLink } from "../../ui/Button/Button.style";
import StyledNavLink from "./NavLink.style";
import { linkType } from "@/types/Link";
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
