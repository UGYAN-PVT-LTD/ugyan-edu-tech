import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../css/Courses.css";
import { useNavigate } from "react-router-dom";
import courses from "../../data/Courses.js";

const Courses = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const skeletonArray = Array.from({ length: 3 });

  return (
    <div className="courses-page mt-5">
      <h1 className="courses-title">
        {loading ? <Skeleton width={220} height={40} /> : "Our Courses"}
      </h1>

      {(loading ? skeletonArray : courses).map((course, index) => (
        <div
          className={`course-block ${index % 2 !== 0 ? "reverse" : ""}`}
          key={index}
        >
          <div className="course-image-container">
            {loading ? (
              <Skeleton height={"100%"} width={"100%"} />
            ) : (
              <img
                src={course.image}
                alt={loading ? "Loading course" : course.title}
                className="course-image"
              />
            )}
          </div>

          <div className="course-content">
            <h2>
              {loading ? <Skeleton width={180} height={30} /> : course.title}
            </h2>
            <p>
              {loading ? <Skeleton count={3} /> : course.description1}
            </p>
            {loading ? (
              <Skeleton height={40} width={160} borderRadius={30} />
            ) : (
              <button
                className="enroll-btn"
                onClick={() =>
                  navigate(`/viewmore/${encodeURIComponent(course.title)}`, {
                    state: { course },
                  })
                }
              >
                View details
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
