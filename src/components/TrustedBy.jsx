import React, { useEffect, useState } from 'react';
import './TrustedBy.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const companyLogos = [
  '/ab1.jpg',
  '/ab2.png',
  '/ab3.png',
  '/ab4.jpg',
  '/ab5.png',
  '/ab6.jpg',
  '/ab7.png',
  '/ab8.jpg'
];

const companyLogos1 = [
  '/tb1.png',
  '/tb2.png',
  '/tb3.png',
  '/tb4.ico',
  '/tb5.png',
  '/tb6.webp'
];

const TrustedBy = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="trusted-by-section">
      <div className="top-row">
        <div className="carousel scroll-right">
          <div className="carousel-track">
            {(loading ? Array(6).fill("") : [...companyLogos, ...companyLogos]).map((logo, index) => (
              <div key={index} className="carousel-logo-wrapper">
                {loading ? (
                  <Skeleton height={60} width={100} />
                ) : (
                  <img src={logo} alt={`Logo ${index}`} className="carousel-logo" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="heading-block">
          <h2>Approved by</h2>
          <FaArrowLeft className="arrow-icon" />
        </div>
      </div>

      <div className="bottom-row">
        <div className="heading-block">
          <h2>Trusted by</h2>
          <FaArrowRight className="arrow-icon" />
        </div>
        <div className="carousel scroll-left">
          <div className="carousel-track">
            {(loading ? Array(6).fill("") : [...companyLogos1, ...companyLogos1]).map((logo, index) => (
              <div key={index} className="carousel-logo-wrapper">
                {loading ? (
                  <Skeleton height={60} width={100} />
                ) : (
                  <img src={logo} alt={`Logo ${index}`} className="carousel-logo" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
