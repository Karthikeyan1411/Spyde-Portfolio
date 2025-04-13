import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

import {
  FaLocationArrow,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "./Contact.css";

import BusinessCard from "./BusinessCard";

import usePageTitle from "../usePageTitle";
import SIcons from "../social-icons/SIcons";

const Contact = () => {
  usePageTitle();

  const formRef = useRef(); // create ref for the form

  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "eddd6e51-6b82-49b6-ba02-3e80e31a4af9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        formRef.current.reset(); // reset the form
      } else {
        Swal.fire({
          title: "Error",
          text: "There was an error. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Network Error",
        text: "Please try again later.",
        icon: "error",
      });
    }
    setLoading(false);
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
            <div className="iconGroup">
              <div className="icon">
                <SiGmail className="i" />
              </div>
              <div className="details">
                <span>Email</span>
                <span style={{ userSelect: "all" }}>
                  karthikeyan1411m@gmail.com
                </span>
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
          <SIcons />
        </section>
        {/* Social Media Ends */}

        {/* Left Section (column) Ends */}

        {/* Right Section (column) Starts */}
        <section className="col right">
          {/* form starts */}
          <form
            className="messageForm"
            name="messageForm"
            onSubmit={onSubmit}
            ref={formRef}
            aria-label="Contact Form"
          >
            <div className="inputGroup halfWidth">
              <input type="text" id="name" name="name" autoComplete="name" required />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="inputGroup halfWidth">
              <input type="email" id="email" name="email" autoComplete="email" required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="inputGroup fullWidth">
              <input type="text" id="subject" name="subject" required />
              <label htmlFor="subject">Subject</label>
            </div>

            <div className="inputGroup fullWidth">
              <textarea id="message" name="message" autoComplete="off" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>

            <div className="inputGroup halfWidth">
              <button type="submit" disabled={loading}>
                {loading ? "Sending... " : "Send Message"}
              </button>
            </div>
          </form>
        </section>
        {/* Right Section (column) Ends */}
      </main>

      <BusinessCard />
    </div>
  );
};

export default Contact;
