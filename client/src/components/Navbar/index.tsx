import React from 'react'
import Cart from '@/assets/icon-cart.svg';
import Avatar from '@/assets/image-avatar.png';
import Logo from '@/assets/logo.svg';
import { navlinks } from '@/data/navlinks';
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  // todo: cart reminder

  return (
    <>
      <div className='container w-10/12 mx-auto flex flex-row items-center justify-between pt-6 pb-8'>
        {/* left section */}
        <div className='flex flex-row'>
          <div className='mr-5'>
            <Link to='/'>
              <img src={Logo} alt='logo' className=''></img>
            </Link>
          </div>


          {navlinks.map(navlink => {
            const { id, text, url } = navlink;
            return (
              <div key={id} className='w-fit inline-flex px-4 pt-1'>
                <div className='relative hover:before:content-[""] hover:before:absolute
                hover:before:left-[-10%] hover:before:bottom-[-2.5rem] hover:before:z-50  hover:before:block hover:before:h-1 hover:before:w-[120%] hover:before:bg-primary hover:before:rounded-lg'>
                  <NavLink className='capitalize relative font-medium drop-shadow-sm text-gray-500 hover:text-gray-800'
                    id={id} to={url}>
                    {text}
                  </NavLink>
                </div>
              </div>
            )
          })}


        </div>

        {/* right section */}
        <div className='flex flex-row '>
          {/* cart */}
          <div className='hover:cursor-pointer my-auto'>
            <img className='fill-gray-900' src={Cart} alt='cart' />
          </div>
          {/* avatar */}
          <div className='relative w-11 h-fit ml-10'>
            <div className="hover:cursor-pointer hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:rounded-full hover:before:outline hover:before:outline-primary">
              <img className="" src={Avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </div>

      <div className='relative -z-50 w-10/12 mx-auto h-0.5 border border-transparent border-t-gray-300'></div>
    </>
  )
}

export default Navbar