import React from "react";
import "./StatsCards.css";

const stats = [
  { number: "500+", label: "Students Enrolled" },
  { number: "100+", label: "Students Placed" },
  { number: "500+", label: "Internships Provided" },
  { number: "3+", label: "Countries" },
];

const StatsCards = () => {
  return (
    <section className="stats-cards">
      {stats.map((item, index) => (
        <div key={index} className="stat-card">
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsCards;
