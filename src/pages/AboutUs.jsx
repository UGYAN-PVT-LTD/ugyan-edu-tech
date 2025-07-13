import React from "react";
import "../css/AboutUs.css";
import { FaLightbulb, FaCompass } from "react-icons/fa";
import Carousel from "../components/Carousel";
import CircularGallery from "../components/CircularGallery.jsx";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Split Screen Section */}
      <section className="split-screen">
        {/* Optional Hero Section */}
        {/* 
        <div className="top-half">
          <div className="hero-left">
            <h2>Empowering Education with Purpose</h2>
            <p>Driven by purpose. Focused on learners. Inspired by change.</p>
            <button>Our Story</button>
          </div>
          <div className="hero-right">
            <img
              src="https://readdy.ai/api/search-image?query=A%20modern%2C%20stylized%20graduation%20cap%20with%20purple%20accents%20floating%20above%20an%20open%20book%20with%20glowing%20pages%2C%20digital%20particles%20flowing%20around%20it%2C%20minimalist%20design%20with%20soft%20lighting%20effects%2C%20perfect%20for%20educational%20technology%20branding&width=800&height=800&seq=1&orientation=squarish"
              alt="Education Concept"
            />
          </div>
        </div>
        */}

        {/* Vision & Mission Cards */}
        <div className="bottom-half">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <div className="card-icon">
                  <FaLightbulb size={40} color="rgb(138, 43, 226)" />
                </div>
                <h3>Our Vision</h3>
                <p>Hover to learn more</p>
              </div>
              <div className="card-back">
                <h3>Our Vision</h3>
                <p>
                  To create a world where quality education is accessible to
                  everyone, empowering individuals to unlock their full
                  potential, regardless of background or geography.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <div className="card-icon">
                  <FaCompass size={40} color="rgb(138, 43, 226)" />
                </div>
                <h3>Our Mission</h3>
                <p>Hover to learn more</p>
              </div>
              <div className="card-back">
                <h3>Our Mission</h3>
                <p>
                  To develop inclusive, innovative, and technology-driven
                  educational solutions that cater to diverse learning needs
                  and drive global transformation in education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey in Pictures */}
      <section className="journey-section">
        <h2>Our Journey in Pictures</h2>
        <p className="journey-text">
          Explore moments that define our culture, showcase our team, and
          highlight our commitment to transforming education.
        </p>

        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
