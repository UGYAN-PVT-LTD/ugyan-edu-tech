import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../css/AboutUs.css';

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about-us-wrapper">
      {/* Intro Section */}
      <div className="intro-section">
        <h1 className="main-heading">
          {loading ? (
            <Skeleton width={320} />
          ) : (
            'Online Education Tailored to You'
          )}
        </h1>
        <p className="description">
          {loading ? (
            <Skeleton count={2} width={700} />
          ) : (
            'Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations'
          )}
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="vision-mission">
        {[...Array(2)].map((_, idx) => (
          <div className="card" key={idx}>
            <div className="card-header">
              <h2 className="card-title">
                {loading ? (
                  <Skeleton width={100} />
                ) : idx === 0 ? (
                  'Vision'
                ) : (
                  'Mission'
                )}
              </h2>
            </div>
            <p className="card-description">
              {loading ? (
                <Skeleton count={4} />
              ) : idx === 0 ? (
                'At UGYAN Learning, our vision is to become a global leader in digital education by making quality learning accessible, inclusive, and personalized for everyone. We envision a future where technology bridges the gap between curiosity and opportunity, empowering individuals to grow, innovate, and lead in a rapidly evolving world.'
              ) : (
                'Our mission is to provide learner-centric, technology-driven education that empowers individuals with the skills and knowledge needed to thrive in the 21st century. Through expert mentorship, interactive content, and real-world applications, we aim to cultivate a community of lifelong learners who are confident, capable, and future-ready.'
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Ugyan Description Section */}
      <div className="ugyan-description reverse-layout">
        <div className="info-box card-animate">
          <h2>{loading ? <Skeleton width={200} /> : 'Welcome to Ugyan'}</h2>
          <p>
            {loading ? (
              <Skeleton count={3} />
            ) : (
              'UGyan is built on the foundation that knowledge is the key to boundless possibilities. We believe learning should not be confined to classrooms or rigid schedules. Instead, it should be a dynamic, empowering experience accessible to all.'
            )}
          </p>
          <p>
            {loading ? (
              <Skeleton count={2} />
            ) : (
              "UGyan's motto, 'Unlock Your Knowledge,' reflects this belief. Our platform brings together expert mentors, practical resources, and personalized pathways to help every learner succeed."
            )}
          </p>
          <div className="features">
            {loading ? (
              <>
                <Skeleton width={120} />
                <Skeleton width={120} />
              </>
            ) : (
              <>
                <span>Industry Knowledge</span>
                <span>Online Courses</span>
              </>
            )}
          </div>
          {loading ? (
            <Skeleton
              width={160}
              height={44}
              style={{ marginTop: '20px', borderRadius: '30px' }}
            />
          ) : (
            <button className="enroll-btn">ENROLL TODAY →</button>
          )}
        </div>

        <div className="image-group">
          {loading ? (
            <>
              <Skeleton className="large-img" height={260} />
              <Skeleton className="small-img" height={180} />
            </>
          ) : (
            <>
              <img src="/course1.jpg" alt="Course 1" className="large-img" />
              <img src="/course2.jpg" alt="Course 2" className="small-img" />
            </>
          )}
        </div>
      </div>

      {/* Team Section */}
      <div className="choose-grid">
        {[1, 2].map((_, index) => (
          <div className="row" key={index}>
            {index % 2 === 0 ? (
              <>
                {/* Image Left */}
                <div
                  className={`image-box ${
                    index % 2 === 0 ? 'green-bg' : 'peach-bg'
                  }`}
                >
                  {loading ? (
                    <Skeleton width="100%" height="100%" />
                  ) : (
                    <img src="/dp.jpg" alt="Team Member" />
                  )}
                </div>

                {/* Text Right */}
                <div className="text-box shadow-box">
                  {loading ? (
                    <Skeleton count={3} />
                  ) : (
                    <p>
                      <span
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <strong>Leela Krishna Vaka</strong>
                        <strong
                          style={{ fontSize: '10px', marginTop: '-0.25rem' }}
                        >
                          Co - founder & Managing director
                        </strong>
                      </span>
                      <br />
                      Education has the power to transform lives. At Ugyan,
                      we're committed to making learning accessible and engaging
                      for all students. Join us in this journey to redefine
                      education."
                    </p>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Text Left */}
                <div
                  className="text-box shadow-box"
                  style={{ padding: '1.5rem' }}
                >
                  {loading ? (
                    <Skeleton count={3} />
                  ) : (
                    <p>
                      <span
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <strong>Aswini Thakkellapati</strong>
                        <strong
                          style={{ fontSize: '10px', marginTop: '-0.25rem' }}
                        >
                          Co-founder & CEO
                        </strong>
                      </span>
                      <br />I believe that education is the cornerstone of a
                      brighter future. At Ugyan, we are driven by the mission to
                      innovate and enhance learning through cutting-edge
                      technology. Our team is dedicated to creating solutions
                      that inspire curiosity, foster creativity, and empower
                      individuals to reach their full potential.
                    </p>
                  )}
                </div>

                {/* Image Right */}
                <div
                  className={`image-box ${
                    index % 2 === 0 ? 'green-bg' : 'peach-bg'
                  }`}
                >
                  {loading ? (
                    <Skeleton width="100%" height="100%" />
                  ) : (
                    <img src="/dp.jpg" alt="Team Member" />
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
