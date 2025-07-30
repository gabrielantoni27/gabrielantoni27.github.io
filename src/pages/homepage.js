import React from 'react';
import '../styles/homepage.css';
import profileImage from '../assets/gabriel.jpg';
import Skills from '../components/skills';
import Works from '../components/work';
import Footer from '../components/footer';
import Contact from '../components/contact';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3>Hi There, I'm</h3>
            <h1>Gabriel Antoni</h1>
            <h2>
              <ReactTyped
                strings={['Full Stack Developer', 'Web Designer', 'UI/UX Specialist']}
                typeSpeed={60}
                backSpeed={30}
                loop
              />
            </h2>
            <p>
              I build responsive websites that are visually engaging and eye catching.
              Let's turn ideas into impactful digital experiences.
            </p>
            <a href="#contact" className="contact-button">Contact Me</a>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="circle-border">
              <img src={profileImage} alt="Profile" />
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="about"
        className="skills-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Skills />
      </motion.section>

      <motion.section
        id="works"
        className="works-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Works />
      </motion.section>

      {/* ✅ Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Contact />
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

export default Home;
