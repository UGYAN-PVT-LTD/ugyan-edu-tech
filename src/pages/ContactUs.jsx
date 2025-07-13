import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../css/ContactUs.css";

const ContactUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (you can replace this with real API call)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-heading">
        {loading ? <Skeleton width={220} /> : "Contact Us"}
      </h1>
      <p className="contact-us-subheading">
        {loading ? <Skeleton width={320} /> : "We'd love to hear from you!"}
      </p>

      <div className="contact-us-content">
        <div className="contact-us-info">
          <h2>{loading ? <Skeleton width={120} /> : "Reach Us"}</h2>
          {loading ? (
            <>
              <Skeleton count={3} />
            </>
          ) : (
            <>
              <p>Email: info@ugyan.in</p>
              <p>Phone: +91 9876543210</p>
              <p>Address: Ugyan Pvt Ltd, Andhra Pradesh, India</p>
            </>
          )}
          <div className="contact-us-social-links">
            {loading ? (
              <Skeleton height={35} width={250} />
            ) : (
              <>
                <a href="#" className="contact-us-social linkedin">LinkedIn</a>
                <a href="#" className="contact-us-social twitter">Twitter</a>
                <a href="#" className="contact-us-social instagram">Instagram</a>
              </>
            )}
          </div>
        </div>

        <div className="contact-us-form">
          <h2 className="contact-us-form-heading">
            {loading ? <Skeleton width={200} /> : "Send a Message"}
          </h2>
          {loading ? (
            <Skeleton height={250} />
          ) : (
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea rows="4" placeholder="Your Message" />
              <button type="submit" >Send</button>
            </form>
          )}
        </div>
      </div>

      <div className="contact-us-map">
        {loading ? (
          <Skeleton height={300} />
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.1318887809143!2d77.60518141474976!3d13.028569990825529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae178a57fae2b3%3A0xa7a3c64c0a2c427f!2sUgyan%20Private%20Limited!5e0!3m2!1sen!2sin!4v1629630923722!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Ugyan Location"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
