import React from "react";
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import WhyChooseUsSection from "../../components/WhyChooseUsSection";
import AboutUsSection from '../../components/AboutUsSection';
import CoursesSection from "../../components/CoursesSection";
import ContactUsSection from "../../components/ContactUsSection";
import TrustedBy from "../../components/TrustedBy";
import Footer from '../../components/Footer';
import '../../css/HomePage.css'; 
import HeroSection from '../../components/HeroSection';

const HomePage = () => {
  return (
    <>
     <section className="HeroSection">
      <HeroSection />
     </section>
      <section className="carousel-section">
        <Carousel />
      </section>    
      <section className="fade-bottom">
        <CoursesSection />
      </section>
      <section>
        <WhyChooseUsSection />
      </section>
             <section className="why-choose-section">
        <AboutUsSection />
      </section>     
            <section>
        <TrustedBy/>
      </section>
      <section className="contact-us-section">
        <ContactUsSection />
      </section>
    </>
  );
};

export default HomePage;
