import React, { useEffect, useState } from "react";
import "./AboutUsSection.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AboutUsSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="why-choose-us mt-5">
      <h2>Who are We ?</h2>
      <p className="subheading">
        {loading ? (
          <Skeleton width={500} height={20} />
        ) : (
          `Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations`
        )}
      </p>

      <div className="choose-grid">
        {/* Row 1 */}
        <div className="row">
          <div className="image-box green-bg">
            {loading ? (
              <Skeleton height={300} width={300} borderRadius={20} />
            ) : (
              <img src="/dp.jpg" alt="Team Member 1" />
            )}
          </div>
          <div className="text-box shadow-box">
            {loading ? (
              <div>
                <Skeleton
                  height={20}
                  width={200}
                  style={{ marginBottom: 10 }}
                />
                <Skeleton count={4} />
              </div>
            ) : (
              <div>
                <div className="flex flex-col mb-3">
                  <span className="text-lg font-bold">Leela Krishna Vaka</span>
                  <span className="text-sm text-gray-600">
                    Co-founder & Managing director
                  </span>
                </div>
                <div>
                  Education has the power to transform lives. At Ugyan, we're
                  committed to making learning accessible and engaging for all
                  students. Join us in this journey to redefine education."
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="flex justify-center items-center">
            <div className="text-box shadow-box">
              {loading ? (
                <div>
                  <Skeleton
                    height={20}
                    width={200}
                    style={{ marginBottom: 10 }}
                  />
                  <Skeleton count={4} />
                </div>
              ) : (
                <div>
                  <div className="flex flex-col mb-3">
                    <span className="text-lg font-bold">
                      Aswini Thakkellapati
                    </span>
                    <span className="text-sm text-gray-600">
                      Co-founder & CEO
                    </span>
                  </div>
                  I believe that education is the cornerstone of a brighter
                  future. At Ugyan, we are driven by the mission to innovate and
                  enhance learning through cutting-edge technology. Our team is
                  dedicated to creating solutions that inspire curiosity and
                  empower individuals to reach their full potential.
                </div>
              )}
            </div>
          </div>
          <div className="image-box peach-bg">
            {loading ? (
              <Skeleton height={300} width={300} borderRadius={20} />
            ) : (
              <img src="/dp.jpg" alt="Team Member 2" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
