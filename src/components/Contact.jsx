import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      style={{
        backgroundColor: "#1a1a2e",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>Contact Details</h2>

      <div style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
        <FaEnvelope style={{ marginRight: "10px" }} />
        <a
          href="mailto:juan.pablo.sal08@gmail.com"
          style={{ color: "white", textDecoration: "none" }}
        >
          juan.pablo.sal08@gmail.com
        </a>
      </div>

      <div style={{ fontSize: "1.2rem" }}>
        <FaPhone style={{ marginRight: "10px" }} />
        +34 617769300 {/* Replace this with your real number */}
      </div>
    </section>
  );
};

export default Contact;
