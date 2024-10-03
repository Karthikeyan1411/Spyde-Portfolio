import React from "react";

import "./css/Home.css";
import usePageTitle from "../usePageTitle";

const Home = (props) => {
  usePageTitle();
  return (
    <section className="home">
      <h1 className="hero-text">
        Hello, I'm <br /> <span>Karthikeyan</span>
      </h1>

      <p className="hero-description">
        Greetings! I am <span>Karthikeyan M</span>, a passionate and driven front-end developer embarking on an exciting journey into the world of technology. With a solid foundation in building dynamic and responsive user interfaces, I bring a fresh perspective and eagerness to innovate. My skills encompass proficiency in HTML, CSS, and Javascript, along with frameworks such as React, which allow me to create engaging and user-friendly web experiences. I thrive in collaborative environments, where my proactive approach and problem-solving mindset contribute to delivering intuitive solutions. As I continue to expand my knowledge and skills, I am eager to apply my enthusiasm and dedication to make a positive impact on your team.
      </p>

      <a 
        href="resume/Karthikeyan M Resume.pdf" 
        download="Karthikeyan M - Resume"
      >
        Click Here &#128073; <span>Download Resume</span>
      </a>

      {/* rendering logos using props */}
      <div className="logo">
        {
          props.logoData.map((logo) => (
          <img 
            key = {logo.id}
            src={`/images/logos/${logo.logoImg}`}  
            alt={logo.logoImg_alt} 
            loading="lazy"
          />
        ))}
      </div>

      <div className="profile-pic">
        <img 
          src="images/profile_pic/Clg.webp" alt="profile-pic" 
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Home;
