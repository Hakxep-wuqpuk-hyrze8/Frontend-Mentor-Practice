import React from 'react'
import SVGImage from '../ui/SVGimage'
import StyledSidabar from './Sidebar.style';
import Close from '../../assets/icon-close.svg';
import SidebarLink from './sidebarLink/SidebarLink';
import StyledSidebar from './Sidebar.style';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <div className='close-icon'>
        <SVGImage src={Close} alt='Close'></SVGImage>
      </div>
      <SidebarLink />
      <div className='sidebar-overlap'></div>
    </StyledSidebar>
  )
}

export default Sidebar