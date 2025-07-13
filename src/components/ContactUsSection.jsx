import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Lottie from 'lottie-react';
import animationData from './contact-lottie.json'; // Ensure this JSON file is valid
import "./ContactUsSection.css";

const ContactUsSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-grid">
        <div className="contact-left">
          {loading ? (
            <>
              <Skeleton height={40} width={200} />
              <Skeleton height={20} width={300} />
              <Skeleton height={320} />
            </>
          ) : (
            <>
              <h2 className="contact-heading">Get in touch</h2>
              <p className="contact-subheading">
                We'd love to hear from you. Drop us a message!
              </p>

              <div className="contact-us-form">
                <h2 className="contact-us-form-heading">Let us call you back</h2>
                <form className="contact-form-elements">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your contact number" />
                  <input type="email" placeholder="Your Email" />
                  <input type="text" placeholder="Interested Course" />
                  <button type="submit" disabled className="send-button" title="Static page only">
                    Request a call back
                  </button>
                </form>
              </div>
            </>
          )}
        </div>

        <div className="contact-right">
          {loading ? (
            <Skeleton height={400} width={400} />
          ) : (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="lottie-animation"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
