import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {RiMenuFoldFill} from 'react-icons/ri'
import {FaTimes} from 'react-icons/fa'

import './css/Navbar.css'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className='navbar'>
        {/* logo image */}
        <NavLink to='/'>
          <img 
              src="images/favicons/spider.png" 
              alt="logo-img" 
              className='nav-logo'
          />
        </NavLink>
        {/* menu items */}
        <ul className={`navbar-items ${isMenuOpen ? 'active': ''}`}>
            <NavLink to='/' className='link' onClick={toggleMenu}> Home</NavLink>
            <NavLink to="/projects" className='link'  onClick={toggleMenu}>Projects</NavLink>
            {/* <NavLink to="/services" className='link'  onClick={toggleMenu}>Services</NavLink> */}
            <NavLink to="/contact" className='link'  onClick={toggleMenu}>Contact</NavLink>
            <NavLink to="/gallery" className='link' onClick={toggleMenu}>Gallery</NavLink>
        </ul>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <RiMenuFoldFill/>}
        </div>
    </nav>
  )
}

export default Navbar