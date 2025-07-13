import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Pages
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import WhyChooseUs from "./pages/WhyChooseUs";
import ViewMore from "./components/ViewMore";
import EnrollPage from "./pages/EnrollPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";

// Admin Pages
import AdminLandingPage from "./adminbuild/pages/landingpage";

// Layout
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Reusable Component
import PolicyPage from "./components/PolicyPage";

// Extracted policy contents
import {
  privacyContent,
  termsContent,
  refundContent
} from "./components/PolicyTexts";

// Protected Route Component
const ProtectedRoute = ({ user, allowedRoles, children }) => {
  if (!user) return <Navigate to="/login" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/" />;
  return children;
};

function App() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoadingUser(false);
  }, []);

  if (loadingUser) return <div className="p-10 text-center">Loading....</div>;

  const isAdmin = user?.role === "Admin";
  const isAuthentication =
    location.pathname === `/login` || location.pathname === `/signup`;

  return (
    <>
      <ScrollToTop />
      {!isAdmin ? (
        <>
          {!isAuthentication && <Navbar user={user} setUser={setUser} />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/viewmore/:title" element={<ViewMore user={user} />} />
            <Route path="/enroll/:title" element={<EnrollPage user={user} />} />
            <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
            <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* ✅ Policy Routes using modular content */}
            <Route path="/privacy-policy" element={<PolicyPage title="Privacy Policy" content={privacyContent} />} />
            <Route path="/terms-and-conditions" element={<PolicyPage title="Terms & Conditions" content={termsContent} />} />
            <Route path="/refund-policy" element={<PolicyPage title="Refund Policy" content={refundContent} />} />
          </Routes>
          {!isAuthentication && <Footer />}
        </>
      ) : (
        <Routes>
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute user={user} allowedRoles={["Admin"]}>
                <AdminLandingPage user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
