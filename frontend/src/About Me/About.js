import React from 'react';
import "./About.css";

function About() {
  return (
    <div className="resume-container">
      <iframe
        src="/sangan_shinde_React.pdf"
        title="Sangam Shinde Resume"
        style={{
          border: "none",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      ></iframe>
    </div>
  );
}

export default About;
