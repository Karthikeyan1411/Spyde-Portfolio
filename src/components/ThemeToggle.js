import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = ({ toggleTheme, isDark }) => {
  return (
    // <button 
    //   className='theme-toggle'
    //   onClick={toggleTheme}
    //   aria-label='Toggle Theme'
    // >
    //   {isDark ? <FaSun className='theme-icon' /> : <FaMoon className='theme-icon' />}
    // </button>
    
    <label className='theme-switch'>
      <input 
        type="checkbox"
        name="checkbox"
        onChange={toggleTheme}
        checked={isDark}
       />
       <span className='slider'>
        <FaSun className='sun-icon' />
        <FaMoon className='moon-icon'/>
       </span>
    </label>
  );
};

export default ThemeToggle;