import React from "react";
import { StyledSidebarLink } from "@/components/ui/Button/Button.style";
import StyledSidebarLinks from "./SidebarLink.style";

// type
import { linkType } from '@/types/link';
import { RenderLinkType } from "@/types/link";

// data
import { links } from "@/data/links";

const SidebarLink: React.FC = () => {
  const renderLink: RenderLinkType = () => {
    return links.map((link: linkType) => {
      const { id, text, url } = link;
      return (
        <StyledSidebarLink key={id} to={url}>
          {text}
        </StyledSidebarLink>
      );
    });
  }

  return <StyledSidebarLinks>
    {renderLink()}
  </StyledSidebarLinks>
};

export default SidebarLink;
