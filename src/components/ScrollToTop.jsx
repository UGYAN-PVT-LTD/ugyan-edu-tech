// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // useEffect(() => {
  //   // Scroll on route change or reload
  //   if (typeof window !== "undefined") {
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   }
  // }, [pathname]);

  return null;
};

export default ScrollToTop;
