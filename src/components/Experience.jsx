import React from "react";
import "./Experience.css";

const experiences = [
  {
    title: "Capstone Project with the Bank of England",
    date: "April 2025 – August 2025",
    description: [
      "Applied generative AI and LLMs to real-world financial problems.",
      "Explored instruction-tuning datasets, reinforcement learning, and fine-tuning models.",
      "Worked with frameworks like LangChain and retrieval-augmented generation (RAG).",
      "Presented findings to industry professionals and received invaluable feedback."
    ]
  },
  {
    title: "University of Cambridge (Remote, United Kingdom)",
    date: "September 2024 – June 2025",
    description: [
      "Advanced postgraduate program in Data Science, Machine Learning, and AI.",
      "Worked on hands-on projects using datasets such as MNIST, e-commerce customer data, and health insurance cost prediction.",
      "Built and optimized machine learning models, including Decision Trees and XGBoost.",
      "Collaborated on a capstone project with the Bank of England."
    ]
  },
  {
    title: "Agency of Public Health of Catalonia (Barcelona, Spain)",
    date: "November 2023 – February 2024",
    description: [
      "Analyzed public health data to assess disease prevalence and risk factors.",
      "Developed statistical models to evaluate health interventions' effectiveness.",
      "Collaborated with multidisciplinary teams to enhance data-driven policy decisions."
    ]
  },
  {
    title: "Centre for Research in Occupational Health (Barcelona, Spain)",
    date: "September 2022 – November 2023",
    description: [
      "Authored thesis: 'Precarious Employment and Excess Mortality during the COVID-19 Pandemic'.",
      "Performed statistical analysis of the Spanish WORKss cohort using R.",
      "Investigated the effects of precarious employment on health outcomes."
    ]
  },
  {
    title: "Bioanalytical Chemistry at the University of Montreal (Montreal, Canada)",
    date: "March 2021 – September 2021",
    description: [
      "Second author of a published research paper on cholesterol imaging in tissue samples.",
      "Conducted data analysis with R, flex imaging, and flex control software.",
      "Developed R scripts for extracting key mass-to-charge ratios (m/z)."
    ]
  },
  {
    title: "Quality Control at Legrand Laboratories (Bogotá, Colombia)",
    date: "July 2019 – August 2019",
    description: [
      "Conducted HPLC analysis of raw materials and final products.",
      "Followed GMP and GLP standards for pharmaceutical quality control.",
      "Prepared reports on impurity levels, homogeneity, and sample quality."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.title}</h3>
            <p className="date">{exp.date}</p>
            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

