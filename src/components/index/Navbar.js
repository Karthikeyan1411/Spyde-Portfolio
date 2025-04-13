import React, { useEffect, useState, useRef } from 'react'
import {NavLink} from 'react-router-dom'
import {RiMenuFoldFill, RiHome5Line, RiFolder3Line, RiGalleryLine, RiMailSendLine} from 'react-icons/ri'
import {FaTimes} from 'react-icons/fa'

import ThemeToggle from '../ThemeToggle';

import './css/Navbar.css'

const Navbar = ({ toggleTheme, isDark }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);
  const ticking = useRef(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }

  const handleScroll = () => {
    if(!ticking.current) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setIsNavbarVisible(scrollY < lastScrollY.current);
        lastScrollY.current = scrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)){
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return() => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar ${isNavbarVisible ? 'navbar-visible' : 'hidden'}`} ref={menuRef}>
        {/* logo image */}
        <NavLink to='/'>
          <img 
              src="images/logos/kkLogo.webp" 
              alt="logo-img" 
              className='nav-logo'
              loading='lazy'
          />
        </NavLink>
        
        <div className="nav-center">
          <ThemeToggle toggleTheme={toggleTheme} isDark={isDark}/>
        </div>
        
        {/* Icon-only menu items */}
        <ul className={`navbar-items ${isMenuOpen ? 'active': ''}`}>
            <NavLink to='/' className='icon-link' onClick={toggleMenu} title='Home'> <RiHome5Line /></NavLink>
            <NavLink to="/projects" className='icon-link'  onClick={toggleMenu} title='Projects'><RiFolder3Line/></NavLink>
            {/* <NavLink to="/services" className='link'  onClick={toggleMenu}>Services</NavLink> */}
            <NavLink to="/contact" className='icon-link'  onClick={toggleMenu}title='contact'><RiMailSendLine/></NavLink>
            <NavLink to="/gallery" className='icon-link' onClick={toggleMenu} title='Gallery'><RiGalleryLine/></NavLink>
        </ul>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <RiMenuFoldFill/>}
        </div>
        
    </nav>
  )
}

export default Navbar