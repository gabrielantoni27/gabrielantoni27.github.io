import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>If you have a project, opportunity, or question, feel free to reach out below!</p>

      {!submitted ? (
        <form
          className="contact-form"
          action="https://formsubmit.co/gabriel.louizze.antoni@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://antoniportfolio.drivenbyhyperfocus.org/#contact" />

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="contact-submit">Send Message</button>
        </form>
      ) : (
        <p className="success-message">✅ Message sent successfully!</p>
      )}
    </section>
  );
}

export default Contact;
