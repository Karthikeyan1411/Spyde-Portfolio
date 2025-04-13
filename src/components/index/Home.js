import React from "react";
import "./css/Home.css";

import usePageTitle from "../usePageTitle";
import SIcons from "../social-icons/SIcons";

const Home = (props) => {
  usePageTitle();
  return (
    <section className="home">
      <div className="home-container">
        {/* rendering logos using props */}
        {/* Left Section - Front-end Skills */}
        <div className="skills-section">
          <div className="skill-category">Front-End</div>
          <div className="skill-icons">
            {props.logoData.slice(0, 4).map((logo, index) => (
              <img
                key={index}
                src={`/images/logos/${logo.logoImg}`}
                alt={logo.logoImg_alt}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-pic">
            <img
              src="images/profile_pic/Clg.webp"
              alt="profile-pic"
              loading="lazy"
            />
          </div>
          <h1 className="name">Karthikeyan M</h1>
          <p className="role">Fullstack Developer</p>

          <SIcons />


        </div>

        {/* About Section */}
        <div className="about-section">
          <h2 className="about-title">About Me</h2>
          <p>
            Greetings! I am <span>Karthikeyan M</span>, a passionate and driven{" "}
            <span>full-stack developer</span> with a deep interest in shaping
            the future of technology.
          </p>
          <p>
            With a strong foundation in both front-end and back-end development,
            I specialize in building dynamic, scalable, and responsive web
            applications. My front-end expertise includes{" "}
            <span>HTML, CSS, and JavaScript</span>, along with frameworks like{" "}
            <span>React</span>, while my back-end skills encompass{" "}
            <span>Java, Python, and server-side technologies</span>. I am also
            proficient in working with both <span>SQL and NoSQL</span>{" "}
            databases, enabling me to create efficient, data-driven applications
            with a seamless user experience.
          </p>
          <p>
            I thrive in collaborative environments where my proactive approach,
            problem-solving mindset, and eagerness to learn contribute to
            delivering high-performance, intuitive solutions. As I continue to
            enhance my skill set, I am excited to apply my passion and
            dedication to building impactful web applications that solve
            real-world challenges and make a positive contribution to your team.
          </p>
          <div className="buttons">
            <a
              href="resume/Karthikeyan M Resume.pdf"
              download="Karthikeyan M - Resume"
              className="btn"
            >
              Resume
            </a>
            <a href="mailto:karthikeyan1411m@gmail.com" className="btn">
              Email Me
            </a>
          </div>
        </div>

        {/* rendering logos using props */}
        {/* Right Section - Back-end and Database Skills */}
        <div className="skills-section">
          <div className="skill-category">Back-End</div>
          <div className="skill-icons">
            {/* Duplicate logos for smooth transition */}
            {props.logoData.slice(4, 6).map((logo, index) => (
              <img
                key={index}
                src={`/images/logos/${logo.logoImg}`}
                alt={logo.logoImg_alt}
                loading="lazy"
              />
            ))}
          </div>
          <div className="skill-category">Databases</div>
          <div className="skill-icons">
            {/* Duplicate logos for smooth transition */}
            {props.logoData.slice(6).map((logo, index) => (
              <img
                key={index}
                src={`/images/logos/${logo.logoImg}`}
                alt={logo.logoImg_alt}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
