import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <section
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh", // Full screen height, better for scrolling
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      {/* Profile Image */}
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          overflow: "hidden",
          marginBottom: "20px",
          border: "4px solid white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/images/Profile.jpg"
          alt="Profile"
          style={{
            width: "100%",
            height: "auto", // preserve aspect ratio
            objectFit: "cover",
            objectPosition: "center +20px",
          }}
        />
      </div>

      {/* Description */}
      <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>About Me</h2>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "800px",
          lineHeight: "1.6",
          marginBottom: "30px",
        }}
      >
        My goal as a professional is to develop predictive models for health
        research and diagnosis, improving outcomes through data-driven insights.
        I am eager to contribute to an organization focused on advancing health
        research and accessibility while continually growing professionally.
        <br /><br />
        My journey in data science was shaped by my postgraduate studies in
        Machine Learning and AI at Cambridge University, where I worked with the
        Bank of England to develop predictive models for financial data. Beyond
        finance, I have applied my analytical skills to research in public health
        and bioanalytical chemistry.
        <br /><br />
        Fluent in English, French, and Spanish, I combine technical expertise
        with strong communication skills, making complex data-driven insights
        accessible across industries.
      </p>

      {/* Social Links */}
      <div style={{ marginTop: "10px" }}>
        <a
          href="mailto:juan.pablo.sal08@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={40} style={{ margin: "0 15px", color: "white" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/juan-pablo-salazar-data-scientist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} style={{ margin: "0 15px", color: "white" }} />
        </a>
        <a
          href="https://github.com/juanpablosalazar96"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} style={{ margin: "0 15px", color: "white" }} />
        </a>
      </div>
    </section>
  );
}

export default About;


