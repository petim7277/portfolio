import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './LetsTalk.module.css';

// Notice: No more image imports! We are 100% SVG now.

const LetsTalk = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const { name, email, service, message } = formData;
    const subject = encodeURIComponent(`Portfolio Inquiry: ${service} from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService Requested: ${service}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:petim7277@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="lets-talk" className={styles.ctaSection}>
      <div className={styles.container}>
        
        {/* LEFT COLUMN */}
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.hugeHeading}>
            Let's <br />
            Work Together <span className="gradient-text">-</span>
          </h2>
          <p className={styles.text}>
            I’m always seeking meaningful work that challenges me and aligns with a culture that values progress, people, and purpose. Bring the vision, I'll bring the architecture.
          </p>
          
          <motion.a 
            href="mailto:petim7277@gmail.com" 
            className={styles.emailPill}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 150, 51, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            {/* INLINE EMAIL SVG */}
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className={styles.mailIcon}
            >
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
            petim7277@gmail.com
          </motion.a>
        </motion.div>

        {/* RIGHT COLUMN: Fully Functional Form */}
        <motion.div 
          className={styles.formContainer}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.formHeader}>
            <h3>Get In Touch</h3>
            <p>Let's work <span className={styles.highlight}>together</span></p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name" 
                required 
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com" 
                required 
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Service</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="Backend API Development">Backend API Development</option>
                <option value="Payment Integration">Payment Integration</option>
                <option value="Fullstack Development">Fullstack Development</option>
                <option value="Technical Consulting">Technical Consulting</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <motion.button 
              type="submit" 
              className={styles.submitBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default LetsTalk;