import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BookSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="book-area">
      <h1 data-aos="fade-down-right">Books Area</h1>
      <p data-aos="zoom-in-up">Search in E-Books the most huge library.</p>
    </div>
  );
}

export default BookSection;
