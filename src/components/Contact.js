// components/Contact.js
import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin  } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

function Contact() {
  return (
    <section id="contact" className="section">


      <h2 className="section__title">CONTACTOS</h2>
     
      <footer className="footer">
      
      <div className="footer__container">
      
        <div className="footer__social-icons">
          
          <a href="https://github.com/Emedeo22" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer__icon" />
          </a>
          <a href="https://instagram.com/nicomdeo?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer__icon" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+543405433121" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="footer__icon" />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-montes-de-oca-305059252/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="footer__icon"/></a>
        </div>
        <div className="footer__contact-info">
          <div className="footer__contact-item">
            
            <span className="footer__contact-text">Phone: +543405433121</span>
          </div>
          <div className="footer__contact-item">
            
            <span className="footer__contact-text">Email: nicolasmontesdeoca07@gmail.com</span>
          </div>
        </div>
        <div className="footer__quick-links">
         
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="footer__link"
          >
            About me
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="footer__link"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="footer__link"
          >
            Contact
          </Link>
        </div>
        <p className="footer__copyright">
          © {new Date().getFullYear()} Todos los derechos reservados. MDEO.
        </p>
      </div>
    </footer>
    </section>
  );
}

export default Contact;
