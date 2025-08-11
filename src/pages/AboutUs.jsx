import React, { useState, useEffect } from "react";
import "../css/AboutUs.css";
import { FaLightbulb, FaCompass } from "react-icons/fa";
import Carousel from "../components/Carousel";
import CircularGallery from "../components/CircularGallery.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";  
import AboutUsSection from "../components/AboutUsSection.jsx";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="about-us-container">
      {/* Main Heading Section */}
      <header className="pt-30 w-full flex justify-center items-center text-4xl font-bold">
        <h1>Online Education Tailored to You</h1>
      </header>
      
      {/* Vision & Mission Section */}
      <section className="split-screen">
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

      {/* Our Journey in Pictures Section */}
      <section className="journey-section">
        <h2>Our Journey in Pictures</h2>
        <p className="journey-text">
          Explore moments that define our culture, showcase our team, and
          highlight our commitment to transforming education.
        </p>

        <div style={{ 
          height: isMobile ? "500px" : "700px", 
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          overflow: "hidden"
        }}>
          <CircularGallery
            bend={isMobile ? 0.5 : 3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={isMobile ? 0.5 : 2}
          />
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs/>
      
      {/* About Us Section */}
      <div className="class">
        <AboutUsSection/>
      </div>
    </div>
  );
};

export default AboutUs;
