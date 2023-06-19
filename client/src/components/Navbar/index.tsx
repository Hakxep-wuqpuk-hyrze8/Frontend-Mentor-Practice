import React from 'react'
import Logo from '@/assets/logo.svg';
import { navlinks } from '@/data/navlinks';
import NavLink from '../NavLink';


const Navbar = () => {
  return (
    <div className='w-full flex flex-row justify-between border border-slate-400'>
      {/* left section */}
      <div className='flex flex-row'>
        <img src={Logo} alt='logo' className=''></img>

        <div className=''>

          {navlinks.map(navlink => {
            const { id, text, url } = navlink;
            return <div className='px-2 inline-flex'>
              <NavLink id={id} text={text} url={url} />
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default Navbar