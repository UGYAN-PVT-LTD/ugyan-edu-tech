import React, { useEffect, useState } from "react";
import "../../css/WhyChooseUs.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const highlights = [
  { title: "Top IIT Mentors", description: "Learn from top minds.", emoji: "🎓" },
  { title: "Flexible Learning", description: "Learn anytime, anywhere.", emoji: "🕒" },
  { title: "Affordable Pricing", description: "Pocket-friendly courses.", emoji: "💰" },
  { title: "Internship Certificate", description: "Get certified.", emoji: "📄" },
  { title: "Real World Projects", description: "Simulate job tasks.", emoji: "💻" },
  { title: "Completion Certificate", description: "Showcase your skills.", emoji: "🏆" },
];

const WhyChooseUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTimeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <div className="why-choose-us-page">
      <section className="highlight-section">
        <h2 className="section-title">Why Choose Ugyan Tech?</h2>
        <div className="highlight-grid-custom">
          {(loading ? Array(6).fill({}) : highlights).map((item, index) => (
            <div className="highlight-card fade-in" key={index}>
              <div className="highlight-emoji">
                {loading ? <Skeleton width={30} height={30} /> : item.emoji}
              </div>
              <h3>{loading ? <Skeleton width={120} /> : item.title}</h3>
              <p>{loading ? <Skeleton count={2} /> : item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
