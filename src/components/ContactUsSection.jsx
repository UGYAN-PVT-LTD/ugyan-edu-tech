import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./ContactUsSection.css";

const ContactUsSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay for demonstration
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-section">
        {loading ? (
          <>
            <Skeleton height={40} width={200} style={{ margin: "0 auto 10px" }} />
            <Skeleton height={20} width={300} style={{ margin: "0 auto 40px" }} />
            <Skeleton height={220} />
          </>
        ) : (
          <>
            <h2 className="contact-heading">Get in touch</h2>
            <p className="contact-subheading">
              We'd love to hear from you. Drop us a message!
            </p>

            <div className="contact-us-form">
              <h2 className="contact-us-form-heading">Let us call you back</h2>
              <form>
                <input type="text" placeholder="Your Name"  />
                <input type="text" placeholder="Your contact number"/>
                <input type="text" placeholder="Your Mail"  />
                <input type="text" placeholder="Intrested Course"  />
                <button type="submit" disabled className="send-button" title="Static page only">
                  Request a call back
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactUsSection;
