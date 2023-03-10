import React from 'react'
import { links, linkType } from '@/data/links';
import { StyledLink } from '../../ui/Button/Button.style';
import StyledNavLink from './NavLink.style';

const Navlink: React.FC = () => {
  return (
    <StyledNavLink>
      {
        links.map((link: linkType) => {
          const { id, text, url } = link;
          return <div className='underline'>
            <StyledLink className='underline-link' key={id} to={url}>{text}</StyledLink>
          </div>
        })
      }
    </StyledNavLink>
  )
}

export default Navlink;