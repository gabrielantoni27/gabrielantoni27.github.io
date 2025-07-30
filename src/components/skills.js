import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaPhp, FaTools, FaDesktop
} from 'react-icons/fa';
import { SiAdobephotoshop, SiMysql } from 'react-icons/si';
import '../styles/skills.css';

function Skills() {
  const skillRows = [
    [
      { icon: <FaHtml5 />, name: "HTML", description: "Semantic markup", level: 100 },
      { icon: <FaCss3Alt />, name: "CSS", description: "Responsive design", level: 100 },
      { icon: <FaJs />, name: "JavaScript", description: "ES6+ & frameworks", level: 60 }
    ],
    [
      { icon: <FaReact />, name: "React.js", description: "Components & hooks", level: 60 },
      { icon: <FaPhp />, name: "PHP", description: "Server-side scripting", level: 60 },
      { icon: <SiMysql />, name: "MySQL", description: "Database management", level: 90 }
    ],
    [
      { icon: <FaFigma />, name: "Figma", description: "UI/UX design", level: 100 },
      { icon: <SiAdobephotoshop />, name: "Photoshop", description: "Design & editing", level: 100 },
      { icon: <FaDesktop />, name: "PC Assembly", description: "Hardware builds", level: 100 }
    ],
    [
      { icon: <FaTools />, name: "Technical Support", description: "Troubleshooting & repair", level: 100 }
    ]
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>My Core Skills</h2>
        <p>Here are my strongest technical abilities:</p>

        <div className="skills-rows">
          {skillRows.map((row, rowIndex) => (
            <div className="skill-row" key={rowIndex}>
              {row.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon purple-icon">{skill.icon}</div>
                  <div className="skill-text">
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;