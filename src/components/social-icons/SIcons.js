import React from 'react'
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaDiscord,
    FaFacebook,
  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./SIcons.css";

const SIcons = () => {
  return (
    <div className="social-icons">
            <a
              href="https://github.com/Karthikeyan1411"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/karthikeyan-m-4b7325163/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/spydekkn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/jaykarthimkk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter-X"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://discord.com/users/566924038337724429"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord />
            </a>
            <a
              href="https://www.facebook.com/coderkarthikn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
  )
}

export default SIcons