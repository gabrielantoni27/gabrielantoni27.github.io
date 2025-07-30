import React from 'react';
import '../styles/work.css';
import page1Image from '../assets/page1.png';
import page2Image from '../assets/page2.png';
import page3Image from '../assets/page3.png';
import page4Image from '../assets/page4.png';
function Works() {
  const projects = [
    {
      title: "Driven by Hyperfocus",
      description: "ADHD Task and Behaviour Management Website",
      previewLink: "https://drivenbyhyperfocus.org/",
      category: "Web App",
      image: page1Image,
      imageAlt: "LeamGo Platform"
    },
    {
      title: "JapanOtakuEx",
      description: "Online Registration for Dark League Studios",
      previewLink: "https://japanotakuex.darkleaguestudios.com/",
      category: "E-commerce",
      image: page2Image,
      imageAlt: "Palerie Website"
    },
     {
      title: "Digital Portfolio",
      description: "Compilation of my works",
      previewLink: "https://www.canva.com/design/DAGcYi3JRZY/V8MTsEeOTnlornEENiHyKA/edit?utm_content=DAGcYi3JRZY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      category: "Digital Portfolio",
      image: page3Image,
      imageAlt: "Palerie Website"
    },
   {
  title: "Ignite Arena",
  description: "Served as Project Manager and Fullstack Developer for Dark League Studios on an ambitious project—intended to be the Philippines' first esports tournament creation platform with integrated betting, boosting services, and a social hub. Project was cancelled due to funding constraints.",
  previewLink: "https://www.canva.com/design/DAGcYi3JRZY/V8MTsEeOTnlornEENiHyKA/edit?utm_content=DAGcYi3JRZY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  category: "Esports Website",
  image: page4Image,
  imageAlt: "Ignite Arena esports project preview"
}

  ];

  return (
    <section className="works">
      <div className="works-header">
        <h2>Portfolio Highlights</h2>
        <p>A showcase of selected projects I've worked on.</p>
      </div>

      <div className="works-grid">
        {projects.map((project, index) => (
          <a 
            href={project.previewLink} 
            className="work-card" 
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="work-image-container">
              <img 
                src={project.image} 
                alt={project.imageAlt}
                className="work-image" 
              />
              <div className="work-overlay">
                <h3>{project.title}</h3>
                <span className="work-category">{project.category}</span>
                <p className="work-description">{project.description}</p>
                <span className="work-view-text">Click to view project</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Works;
