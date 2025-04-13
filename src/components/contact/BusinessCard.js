import React, { useRef, useState } from 'react'
import "./BusinessCard.css"

const BusinessCard = () => {

  const [ripples, setRipples] = useState([]);
  const cardRef = useRef(null);

  // Function to create ripple effect at cursor position
  const createRipple = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {id: Date.now(), x, y, size};
    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <section className='business-card' ref={cardRef} onMouseEnter={createRipple}>
      {/* Water Ripple Effect */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className='ripple'
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        ></span>
      ))}


        {/* overlay */}
        <div className="overlay" />
        
        {/* content */}
        <div className="content">
          <link href="https://fonts.googleapis.com/css?family=League Spartan" rel='stylesheet' />
            <h1 className='name'>Karthikeyan M</h1>
            <p className='business-title'>Fullstack developer</p>
            <p className="contact">+91-7092981728</p>
            <p className="email">karthikeyan1411m@gmail.com</p>
            <a href="https://spyde-portfolio.netlify.app/" className='portfolio' target='_blank' rel='noopener noreferrer'>spyde-portfolio.netlify.app</a>
        </div>
    </section>
  )
}

export default BusinessCard