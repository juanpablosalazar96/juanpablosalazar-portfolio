import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        backgroundColor: "#1a1a2e", // Dark Blue Background
        backgroundImage: "url('/your-background-image.jpg')", // Add an image if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 style={{ color: "white", fontSize: "2.5rem", marginBottom: "10px" }}>
        Hi, I'm Juan Pablo Salazar
      </h1>
      <p style={{ color: "white", fontSize: "1.2rem", marginBottom: "20px" }}>
        Decoding health outcomes with data-driven insights
      </p>

      {/* Download CV Button */}
      <div style={{ marginBottom: "20px" }}>
        <a
          href="/CV_Juan_Pablo_Salazar.pdf" download="CV_Juan_Pablo_Salazar.pdf"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Download CV
        </a>
      </div>

      {/* Social Media Icons */}
      <div>
        <button
          onClick={() =>
            (window.location.href = "mailto:juan.pablo.sal08@gmail.com")
          }
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <FaEnvelope size={30} style={{ color: "white", margin: "0 10px" }} />
        </button>

        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/juan-pablo-salazar-data-scientist",
              "_blank"
            )
          }
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <FaLinkedin size={30} style={{ color: "white", margin: "0 10px" }} />
        </button>

        <button
          onClick={() =>
            window.open("https://github.com/juanpablosalazar96", "_blank")
          }
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <FaGithub size={30} style={{ color: "white", margin: "0 10px" }} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
