// src/components/ProjectsSection.jsx
import React from 'react';
import './ProjectsSection.css';

const projects = [
  {
    title: 'Bank of England Employer Project',
    techniques: 'RAG | Topic Modelling | LLMs & SLMs | Sentiment Analysis ',
    description: 'Starting in May 2025, I will work on a collaborative project with the Bank of England focused on enhancing the Bank’s risk assessment processes by leveraging advanced language models to analyze quarterly earnings call transcripts from financial institutions. This natural language processing approach supports more proactive monitoring of firm stability, early detection of high-risk behavior, and improved regulatory oversight, ultimately helping to prevent future financial crises.',
    image: '/images/Bank-of-England.jpg',
    link: 'https://github.com/juanpablosalazar96/Bank-of-England-Project',
    large: true,
  },
  {
    title: 'BookScan Sales Forecasting with Time Series Analysis and Machine Learning Techniques',
    techniques: ' Sales Prediction | Time Series Analysis | ARIMA | XGBoost | LSTM | ACF, PACF, Ljung-Box |',
    description: 'By leveraging historical sales data and sophisticated machine learning algorithms, this project generates accurate forecasts of future book sales. These predictions support informed decision-making around stock management and targeted marketing strategies.',
    image: '/images/Project1.png',
    link: 'https://github.com/juanpablosalazar96/BookScan-Sales-Forecasting-with-Time-Series-Analysis-and-Machine-Learning-Techniques',
    large: false,
  },
  {
    title: 'Topic modelling of Puregym Reviews with Natural Language Processing',
    techniques: 'NLP | Topic Modelling | LDA | Text Preprocessing | Sentiment Analysis',
    description: 'In this project, I used advanced natural language processing techniques such as BERTopic and sentiment analysis to identify key themes and sentiments within customer reviews. The insights helped a national gym chain better understand member feedback and improve overall customer experience. (To maintain confidentiality, the original dataset and visual outputs are not displayed. Only anonymised summaries and the project code are available.)',
    image: '/images/Project2.jpg',
    link: 'https://github.com/juanpablosalazar96/Topic-modelling-of-Puregym-Reviews-with-Natural-Language-Processing',
    large: false,
  },
  {
    title: 'Student Dropout Predictions with Advanced Machine Learning Techniques',
    techniques: 'Classification | Tree-based Models | SHAP Values | Hyperparameter Tuning',
    description: 'In this project, I applied advanced supervised learning techniques to predict student dropouts, with the goal of reducing dropout rates that can adversely affect institution finances, reputation, and student satisfaction.                                                                                                                                                                    (To maintain confidentiality, the original dataset and visual outputs are not displayed. Only anonymised summaries and the project code are available.)',
    image: '/images/Project3.jpg',
    link: 'https://github.com/juanpablosalazar96/Student-Dropout-Supervised-Learning-Prediction',
    large: false,
  },
  {
    title: 'Customer Segmentation of an E-commerce Data Set from a Real-world Organisation',
    techniques: 'Customer Clustering | PCA | K-Means | Elbow Method | Silhouette Score',
    description: 'This project combines analytical reasoning with machine learning techniques to develop customer segmentation models, enabling more effective marketing approaches and enhancing the overall customer experience.',
    image: '/images/Project4.png',
    link: 'https://github.com/juanpablosalazar96/Customer-Segmentation-of-an-E-commerce-Data-Set-from-a-Real-world-Organisation',
    large: false,
  },
  {
    title: 'Anomalous Ship Functionality Detection with Data Analysis',
    techniques: 'Unsupervised Anomaly Detection | SVM | Isolation Forest | Feature Engineenring | Exploratory Analysis',
    description: 'This project aims to identify anomalous ship activity to maintain optimal engine performance, using a combination of statistical methods, feature engineering, and machine learning techniques for anomaly detection.',
    image: '/images/Project5.png',
    link: 'https://github.com/juanpablosalazar96/Anomalous-Ship-Functionality-Detection-with-Data-Analysis',
    large: false,
  },
  {
    title: 'Predict Mental Health Diagnostics in Students',
    techniques: 'Logistic Regression | Data Balancing | Feature Selection | Model Evaluation',
    description: 'Built models to identify mental health risks among students, supporting early intervention and well-being strategies (Coming soon).',
    image: '/images/Project6.png',
    link: 'https://github.com/juanpablosalazar96/Predict-Mental-Health-Diagnostics-in-Students',
    large: false,
  },
];


const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Data Science Projects</h2>
      <p className="description">
        These projects were thoughtfully chosen to demonstrate my abilities across the diverse landscape of Data Science
        -diving deep into data, uncovering meaningful insights and applying the appropiate tools to a wide range of problems.
        These include techniques such as linear regression, clustering, classification, supervised and unsupervised learning, neural networks, decision trees, XGBoost, 
        deep learning, model fine-tuning and pre-training and working with both structured and unstructured data.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.large ? 'large' : ''}`}
          >
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p className="text-sm text-blue-600 font-medium mt-2">{project.techniques}</p>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-button"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

