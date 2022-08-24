import React from 'react'
import NavbarList from './navbarListItems'
import { leftItems, rightItems } from './NavItems'

const NavBar = () => {
  return (
    <nav className='h-16 p-10 bg-tmdbDarkBlue text-white flex font-semibold justify-between items-center max-w-[1400px] mx-auto'>
        <NavbarList items={leftItems} />
        <NavbarList items={rightItems} />

    </nav>
  )
}

export default NavBar