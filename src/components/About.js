import React from 'react';
import './About.css';
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

function About() {
  const handleDownload = () => {
    // URL del archivo de currículum vitae
    const cvUrl = '/NICOLAS MONTES DE OCA.pdf';

    // Crea un enlace temporal
    const link = document.createElement('a');
    link.href = cvUrl;
    link.target = '_blank';

    // Comprueba si el navegador admite el atributo "download" para la descarga directa
    if ('download' in link) {
      link.download = 'curriculum.pdf'; // Nombre del archivo de descarga
    }

    // Agrega el enlace al documento y haz clic en él para descargar o abrir en una nueva pestaña
    document.body.appendChild(link);
    link.click();

    // Elimina el enlace temporal del documento
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section">
      
      <div className="about-container"> 
       
        
        <img className='banner' src="/ultimo.webp" alt="banner" />
        <p className="presentation__text">
          I'm Nicolas Montes De oca<span className='Title-1'>Web Developer</span>
          </p>
       
        <div className="about-image-container">
          
          <img
            className="about-image"
            src="/about2.webp" alt="avatar" />        
        </div>
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
        <div className="about-button-container">
          <button className="about-button" onClick={handleDownload}>Download CV</button>
        </div>
      
      </div>
     
    
    </section>
  );
}
 

export default About;
