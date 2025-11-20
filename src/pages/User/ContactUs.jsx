import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../css/ContactUs.css";

const ContactUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (you can replace this with real API call)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-heading font-bold">
        {loading ? <Skeleton width={220} /> : "Contact Us"}
      </h1>
      <p className="contact-us-subheading">
        {loading ? <Skeleton width={320} /> : "We'd love to hear from you!"}
      </p>

      <div className="contact-us-content">
        <div className="contact-us-info flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold">{loading ? <Skeleton width={120} /> : "Reach Us"}</h2>
          {loading ? (
            <>
              <Skeleton count={3} />
            </>
          ) : (
            <>
              <div className="flex flex-col justify-start items-start md:px-20">
                <p><strong>Email:</strong> support@ugyan.in</p>
                <p><strong>Phone:</strong> +91 80886 51951</p>
                <p><strong>Address:</strong> Sigma Tech Park,
                 Whitefield Main Rd, Bengaluru, Karnataka, 560066</p>
              </div>
            </>
          )}
          <div className="contact-us-social-links">
            {loading ? (
              <Skeleton height={35} width={250} />
            ) : (
              <>
                <a href="https://www.linkedin.com/company/ugyan-pvt-ltd/" className="contact-us-social linkedin">LinkedIn</a>
                <a href="https://www.facebook.com/profile.php?id=61558530543625" className="contact-us-social twitter">Facebook</a>
                <a href="https://www.instagram.com/ugyan_edu?igsh=M2w0MGZ6dXM4MHRl" className="contact-us-social instagram">Instagram</a>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.213293803623!2d77.7445481!3d12.9581991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x659d12bf5498f4e7%3A0x8ef08c377c391150!2sUGYAN%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1752427837492!5m2!1sen!2sin"
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
