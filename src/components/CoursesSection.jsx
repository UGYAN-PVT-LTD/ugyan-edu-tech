import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./CoursesSection.css";
import { ArrowRight } from "lucide-react";
import courses from "../data/Courses.js";

const CoursesSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="courses-section flex flex-col">
      <h2 className="section-title">
        {loading ? <Skeleton width={180} /> : "Courses"}
      </h2>

      <div className="courses-grid">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div className="course-card" key={index}>
                <Skeleton height={100} className="course-image" />
                <h3 className="course-title">
                  <Skeleton width={`80%`} />
                </h3>
                <p className="course-description">
                  <Skeleton count={2} />
                </p>
                <Skeleton
                  height={40}
                  width={120}
                  style={{ margin: "10px auto", borderRadius: "10px" }}
                />
              </div>
            ))
          : courses.map((course, index) => (
              <div className="course-card" key={index}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <button
                  className="enroll-button"
                  onClick={() =>
                    navigate(`/viewmore/${encodeURIComponent(course.title)}`, {
                      state: { course },
                    })
                  }
                >
                  View More
                </button>
              </div>
            ))}
      </div>

      <div className="flex justify-center mt-16">
        {loading ? (
          <Skeleton
            height={44}
            width={180}
            style={{ borderRadius: "30px" }}
          />
        ) : (
          <button
            className="see-all-button flex items-center gap-3"
            onClick={() => navigate("/courses")}
          >
            See All Courses
            <span className="arrow">
              <ArrowRight size={20} />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CoursesSection;
