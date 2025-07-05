import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import UgyanText from "./UgyanText";
import HeroLottie from "./HeroLottie";
import TypingTagline from "./TypingTagline";
import StatsCards from "./StatsCards";
import "./HeroSection.css";

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-wrapper">
      
      <div className="hero-container">
        <div className="hero-content">
          {loading ? (
            <Skeleton width={220} height={36} style={{ margin: "0 auto" }} />
          ) : (
            <UgyanText
              sentence="Ugyan EduTech"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          )}

          <h1>
            {loading ? (
              <Skeleton width={480} height={45} style={{ margin: "16px auto" }} />
            ) : (
              <>
                Career-Ready <span className="highlight">Learning,</span>
                <br />
                Simplified Online
              </>
            )}
          </h1>

          <p>
            {loading ? (
              <Skeleton count={2} width={700} style={{ margin: "0 auto" }} />
            ) : (
              <>
                Empower your career with practical, personalized learning and
                internship-backed courses from top educators.
              </>
            )}
          </p>

          <div className="hero-buttons">
            {loading ? (
              <>
                <Skeleton width={160} height={44} borderRadius={30} />
                <Skeleton width={140} height={44} borderRadius={30} />
              </>
            ) : (
              <>
                <button className="btn explore">Explore Courses</button>
                <button className="btn enroll">Enroll Now</button>
              </>
            )}
          </div>

          {!loading && <TypingTagline />}
        </div>

        {!loading && (
          <div className="hero-animation">
            <HeroLottie />
          </div>
        )}
      </div>

      {/* Stats Cards BELOW */}
      {!loading && (
        <div className="stats-wrapper">
          <StatsCards />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
