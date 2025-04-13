import React from 'react';

import Clock from '../Clock'

import './css/Footer.css';

function Footer() {

    const today = new Date()

    return(
        <footer className="footer">
            <Clock />
            <p className='copyright'>Spyde &copy; ALL RIGHTS RESERVED {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer;