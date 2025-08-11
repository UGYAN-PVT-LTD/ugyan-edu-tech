import Carousel from "../../components/Carousel";
import WhyChooseUsSection from "../../components/WhyChooseUsSection";
import AboutUsSection from "../../components/AboutUsSection";
import CoursesSection from "../../components/CoursesSection";
import ContactUsSection from "../../components/ContactUsSection";
import TrustedBy from "../../components/TrustedBy";
import "../../css/HomePage.css";
import HeroSection from "../../components/HeroSection";

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <Carousel />
      <CoursesSection />
      <WhyChooseUsSection />
      <AboutUsSection />
      <TrustedBy />
      <ContactUsSection />
    </div>
  );
};

export default HomePage;
