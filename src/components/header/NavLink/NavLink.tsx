import React, { useState } from "react";
import { links } from "@/data/links";
import { StyledLink } from "../../ui/Button/Button.style";
import StyledNavLink from "./NavLink.style";
import { linkType } from "@/types/Link";

const Navlink: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
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
            onClick={(event) => handleClick(event, id)}
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
