import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import UgyanText from "./UgyanText";
import HeroLottie from "./HeroLottie";
import TypingTagline from "./TypingTagline";
import StatsCards from "./StatsCards";
import "./HeroSection.css";

const HeroSection = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-wrapper">
      {/* Content + Animation Row */}
      <div className="hero-container">
        <div className="hero-content">
          {loading ? (
            <Skeleton
              width={220}
              height={36}
              style={{ margin: "0 auto" }}
              borderRadius={8}
            />
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
              <Skeleton
                width={300}
                height={40}
                style={{ margin: "16px 0" }}
                borderRadius={10}
              />
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
              <>
                <Skeleton
                  width={`90%`}
                  height={18}
                  style={{ margin: "8px 0" }}
                  borderRadius={4}
                />
                <Skeleton
                  width={`80%`}
                  height={18}
                  style={{ margin: "8px 0" }}
                  borderRadius={4}
                />
              </>
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
                <button className="btn explore" onClick={() => navigate("/courses")}>
                  Explore Courses
                </button>
                <button className="btn enroll" onClick={() => navigate("/about-us")}>
                  About Us
                </button>
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
      {!loading && (
        <div className="stats-wrapper">
          <StatsCards />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
