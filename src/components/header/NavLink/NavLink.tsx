import React from 'react'
import { links, linkType } from '@/data/links';
import { StyledLink } from '../../ui/Button/Button.style';
import StyledNavLink from './NavLink.style.ts';

const Navlink = () => {
  return (
    <div>
      {
        links.map((link: linkType) => {
          const { id, text, url } = link;
          return <StyledLink key={id} to={url}>{text}</StyledLink>
        })
      }
    </div>
  )
}

export default Navlink;