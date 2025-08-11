import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaSignOutAlt, FaEdit } from "react-icons/fa";
import "../css/UserProfile.css";

const UserProfile = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  if (!user) {
    navigate("/loginorSignup");
    return null;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <FaUser size={60} />
          </div>
          <h1 className="profile-name">
            Hi, {user.firstName} {user.lastName}!
          </h1>
          <p className="profile-email">
            <FaEnvelope /> {user.email}
          </p>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h2>Personal Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>First Name:</label>
                <span>{user.firstName}</span>
              </div>
              <div className="info-item">
                <label>Last Name:</label>
                <span>{user.lastName}</span>
              </div>
              <div className="info-item">
                <label>Email:</label>
                <span>{user.email}</span>
              </div>
              <div className="info-item">
                <label>Member Since:</label>
                <span>{new Date(user.createdAt || Date.now()).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>My Courses</h2>
            <div className="enrolled-courses">
              <p className="no-courses">You haven't enrolled in any courses yet.</p>
              <button 
                className="browse-courses-btn"
                onClick={() => navigate("/courses")}
              >
                Browse Courses
              </button>
            </div>
          </div>

          <div className="profile-actions">
            <button className="edit-profile-btn">
              <FaEdit /> Edit Profile
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 