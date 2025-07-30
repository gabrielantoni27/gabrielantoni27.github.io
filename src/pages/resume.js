import React from 'react';
import '../styles/resume.css';
import { motion } from 'framer-motion';
import Footer from '../components/footer';

function Resume() {
  return (
    <>
      <motion.section
        className="resume"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="resume-grid">
          <div className="resume-card full-width">
            <h1>Antoni Gabriel Louizze S.</h1>
            <p>#5 Begonia Street, Rivera Village, Pasay City 1300</p>
            <p>T: +639456225476 | E: gabriel.louizze.antoni@gmail.com</p>
          </div>

          <div className="resume-card">
            <h2>Education</h2>
            <ul>
              <li>Adamson University, BS Information Technology (2024–2025)</li>
              <li>Thesis: Driven by Hyperfocus – ADHD Task and Behavior Management Website</li>
              <li>Academic Merit Award – GWA: 1.46</li>
              <li>Outstanding Award in Public Image – Rotaract Club of Adamson University</li>
              <li>Meritorious Service Award – Adamson University Student Government</li>
              <li>Best Capstone Project Nominee</li>
              <li>Best Game Tournament Intern Project – Dark League Studios</li>
              <li>Graduated with High Honors (Senior High – STECH, 2021)</li>
            </ul>
          </div>

          <div className="resume-card">
            <h2>Certifications</h2>
            <ul>
              <li>Certified IT Specialist (Database)</li>
              <li>Proficiency: Adobe XD, Procreate, Canva, Photoshop</li>
              <li>HTML, CSS, JavaScript, PHP, MySQL, Node.js</li>
            </ul>
          </div>

          <div className="resume-card">
            <h2>Licenses</h2>
            <ul>
              <li>Certified IT Specialist – Database Management, 2024–2025</li>
              <li>Full Stack Java Development (2025)</li>
              <li>ReactJS for Beginners (2025)</li>
            </ul>
          </div>

          <div className="resume-card full-width">
            <h2>Experience</h2>

            <h3>Dark League Studios</h3>
            <span>Feb – May 2025 | Quezon City</span>
            <ul>
              <li>OJT Full-Stack Developer / Game Visual Artist / Project Manager</li>
              <li>Led a development team for a gaming website platform</li>
              <li>Designed branding, backgrounds, and assets</li>
              <li>Built site for Otaku event</li>
            </ul>

            <h3>Guild of Animation Makers and Esports (GAMe), Adamson Univ</h3>
            <span>2024 – 2025</span>
            <ul>
              <li>Head of Creatives</li>
              <li>Designed org branding and managed team of illustrators/layout artists</li>
              <li>Helped PR with media team outputs</li>
            </ul>

            <h3>Adamson Univ Student Government</h3>
            <span>2023 – 2025</span>
            <ul>
              <li>Layout Artist / Illustrator / Technical Staff</li>
              <li>Created digital publications and supported technical operations</li>
            </ul>

            <h3>Guild of Animation Makers and Esports</h3>
            <span>2022 – 2023</span>
            <ul>
              <li>Creatives Member – visuals, posters, tech support</li>
            </ul>

            <h3>Adamson University IT & IS Society</h3>
            <span>2021 – 2022</span>
            <ul>
              <li>Layout Artist – created assets and publications for the department</li>
            </ul>

            <h3>Freelance – Fiverr & Upwork</h3>
            <span>2020 – Present | Remote</span>
            <ul>
              <li>Customized digital artworks for global clients</li>
              <li>Specialized in characters, illustrations, layouts</li>
            </ul>
          </div>

          <div className="resume-card full-width">
            <h2>Leadership & Activities</h2>

            <h3>Driven by Hyperfocus – IT Capstone Project</h3>
            <span>2024 – 2025</span>
            <ul>
              <li>Project Manager & Full-Stack Developer</li>
              <li>Created Adobe XD prototype and developed initial build</li>
              <li>Refactored codebase for easier collaboration</li>
            </ul>

            <h3>Rotaract Club of Adamson University</h3>
            <span>2023 – 2025</span>
            <ul>
              <li>Public Relations Officer (2023–2024)</li>
              <li>Public Image Director (2024–2025)</li>
              <li>Created all publication materials and helped manage events and outreach</li>
            </ul>
          </div>

          <div className="resume-card">
            <h2>Achievements</h2>
            <ul>
              <li>Best Capstone Nominee, 2024–2025</li>
              <li>Founder and Project Manager of "Driven by Hyperfocus"</li>
              <li>Branding designer for student orgs/events</li>
            </ul>
          </div>

          <div className="resume-card">
            <h2>Training</h2>
            <ul>
              <li>Cybersecurity</li>
              <li>Advanced SQL and Database Optimization</li>
              <li>Adobe XD UI/UX Prototyping</li>
              <li>Full-stack Web Development</li>
              <li>Agile & Project Management</li>
              <li>Desktop/Laptop Troubleshooting</li>
            </ul>
          </div>

          <div className="resume-card full-width">
            <h2>References</h2>
            <ul>
              <li>Mr. Anton Estepa – IT Director, Marubeni PH | +639178150828</li>
              <li>Mr. Chris Eslava – IT Head, Sysu Int’l Inc. | +639175393455</li>
              <li>Mr. Mark Steve Huncia – IT Manager, Grupo Agatep | +639162242770</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="footer"
        className="footer-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.section>
    </>
  );
}

export default Resume;