import React from 'react'
import { Link } from 'react-router-dom'
import { NavlinkType } from '@/types/components/NavLink'

const NavLink = ({ id, text, url }: NavlinkType) => {
  return (
    <Link className='hover:text-primary' id={id} to={url}>{text}</Link>
  )
}

export default NavLink