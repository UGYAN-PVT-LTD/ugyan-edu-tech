// Example: src/components/HeroLottie.jsx
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - idFTiSGOqN.json"; // path to your JSON

const WorkshopLottie = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default WorkshopLottie;