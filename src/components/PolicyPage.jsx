import React from "react";
import "./PolicyPage.css";

const PolicyPage = ({ title, content }) => {
  return (
    <div className="policy-container">
      <div className="policy-wrapper">
        <h1 className="policy-title">{title}</h1>
        <div className="policy-content">{content}</div>
      </div>
    </div>
  );
};

export default PolicyPage;
