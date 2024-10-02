import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {BsTwitterX} from 'react-icons/bs'

import './css/Footer.css';

function Footer() {

    const today = new Date()

    return(
        <footer className="footer">
            <div className="social-icons">
                <a href="https://github.com/Karthikeyan1411" target='_blank' rel='noopener noreferrer' aria-label='Github'>
                <FaGithub /></a>
                <a href="https://www.linkedin.com/in/karthikeyan-m-4b7325163/" target='_blank' rel='noopener noreferrer' aria-label='Linkedin'>
                <FaLinkedin/></a>
                <a href="https://www.instagram.com/spydekkn/" target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                <FaInstagram/></a>
                <a href="https://x.com/jaykarthimkk" target='_blank' rel='noopener noreferrer' aria-label='Twitter-X'>
                <BsTwitterX/></a>
            </div>
            <div className='link'>
                <Link to="/contact" className='btn-link'>Hire</Link>
                <p>|</p>
                <Link to="/contact" className='btn-link'>Contact</Link>
                <p className='copyright'>Spyde &copy; ALL RIGHTS RESERVED {today.getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;