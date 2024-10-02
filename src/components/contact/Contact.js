import React, { useRef } from "react";
import Swal from 'sweetalert2'

import {
  FaLocationArrow,
  // FaPhoneSquareAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {BsTwitterX} from 'react-icons/bs'
import { SiGmail } from "react-icons/si";

import "./Contact.css";
import usePageTitle from "../usePageTitle";

const Contact = () => {

  usePageTitle();

  const formRef = useRef(); // create ref for the form

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "eddd6e51-6b82-49b6-ba02-3e80e31a4af9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
    
      const data = await res.json();

      if (data.success) {
        // console.log("Success", data);
        // event.target.reset();
        // alert("Message sent successfully!");

        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
        formRef.current.reset(); // reset the form
      } else{
        console.error("Error:", data);
        alert("There was an error sending your message. Please try again.")
      }
    } catch(error){
      console.error("Network error:", error);
      alert("There was a network error. Please try again later.");
    }
  };


  return (
    <div className="cont-container">
      <main className="row">

      {/* Left Section (column) Starts */}
        <section className="col left">
          {/* contact info */}
          <div className="contactTitle">
            <h2>Get In Touch</h2>
          </div>
          <div className="contactInfo">
            {/* <div className="iconGroup">
              <div className="icon">
                <FaPhoneSquareAlt className="i" />
              </div>
              <div className="details">
                <span>Phone</span>
                <span>+00 110 111 00</span>
              </div>
            </div> */}

            <div className="iconGroup">
              <div className="icon">
                <SiGmail className="i" />
              </div>
              <div className="details">
                <span>Email</span>
                <span style={{userSelect: 'all'}} >karthikeyan1411m@gmail.com</span>
              </div>
            </div>

            <div className="iconGroup">
              <div className="icon">
                <FaLocationArrow className="i" />
              </div>
              <div className="details">
                <span>Location</span>
                <span>Salem, TamilNadu, India</span>
              </div>
            </div>
          </div>

        {/* Social Media Starts */}
        <div className="socialMedia">
          <a
            href="https://github.com/Karthikeyan1411"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub className="i" />
          </a>
          <a
            href="https://www.linkedin.com/in/karthikeyan-m-4b7325163/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin className="i" />
          </a>
          <a
            href="https://www.instagram.com/spydekkn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="i" />
          </a>
          <a
            href="https://x.com/jaykarthimkk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter-X"
          >
            <BsTwitterX className="i" />
          </a>
        </div>
        </section>
        {/* Social Media Ends */}

        {/* Left Section (column) Ends */}

        {/* Right Section (column) Starts */}
        <section className="col right">
          {/* form starts */}
          <form className="messageForm" onSubmit={onSubmit} ref={formRef}>
            <div className="inputGroup halfWidth">
              <input type="text" id="name" name="name" autoComplete="name" required="required" />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="inputGroup halfWidth">
              <input type="email" id="email" name="email" autoComplete="email" required="required" />
              <label htmlFor="email">Email</label>
            </div>

            <div className="inputGroup fullWidth">
              <input type="text" id="subject" name="subject" required="required" />
              <label htmlFor="subject">Subject</label>
            </div>

            <div className="inputGroup halfWidth">
              <textarea id="message" name="message" autoComplete="off" required="required"></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <div className="inputGroup halfWidth">
              <button>Send Message</button>
            </div>
          </form>
        </section>
      {/* Right Section (column) Ends */}
      </main>
    </div>
  );
};

export default Contact;
