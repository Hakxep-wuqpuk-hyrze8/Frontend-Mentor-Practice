import React, { useState } from "react";
import { links, linkType } from "@/data/links";
import { StyledLink } from "../../ui/Button/Button.style";
import StyledNavLink from "./NavLink.style";

const Navlink: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number>();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number
  ) => {
    event.preventDefault();
    setActiveLink(id);
    console.log("0.0");
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
