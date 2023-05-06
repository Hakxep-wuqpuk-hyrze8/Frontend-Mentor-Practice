import React from "react";
import StyledSidebar from "./Sidebar.style";
import Close from "../../assets/icon-close.svg";

// component
import SVGImage from "../ui/SVGimage";
import SidebarLink from "./sidebarLink/SidebarLink";

// redux
import { useAppSelector } from "@/app/hooks";
import {
  selectIsOpen,
  toggleSidebar,
} from "./../../feature/sidebar/sidebarSlice";
import { useAppDispatch } from "./../../app/hooks";

const Sidebar = () => {
  const isOpen = useAppSelector(selectIsOpen);
  const diapatch = useAppDispatch();

  const handleClose = () => {
    diapatch(toggleSidebar());
  };

  return (
    <StyledSidebar isOpen={isOpen}>
      <div className="sidebar-inner">
        <button className="close-icon" type="button" onClick={handleClose}>
          <SVGImage src={Close} alt="Close"></SVGImage>
        </button>
        <SidebarLink />
      </div>
      <div className="backdrop"></div>
    </StyledSidebar>
  );
};

export default Sidebar;
