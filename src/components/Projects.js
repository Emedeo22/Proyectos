import { FaGithub, FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaExternalLinkAlt } from 'react-icons/fa';
import { SiAstro } from "react-icons/si";
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Proyectos</h2>
      <div className="project">
        <h3 className="project__title">Sofcell E-commerce</h3>
      
        <img className='project__img' src="/sofi.png" alt='S warranty' />
        <p className="project__description">
        <a href="https://sofcell-online.vercel.app/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt className="footer__icon" /></a>
        <a href="https://github.com/Emedeo22" target="_blank" rel="noopener noreferrer"><FaGithub className="footer__icon" /></a>
          <FaCss3Alt className="footer__icon" />
          <FaJs className="footer__icon" />
          <FaHtml5 className="footer__icon" />
        </p>

      </div>
      <div className="project">
        <h3 className="project__title">Gaia Calzados E-commerce</h3>
        <div className='container_img'>
          <img className='project__img'  src="/gaia.webp" alt='S warranty' />
        </div>
        <p className="project__description">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt className="footer__icon" /></a> 
        <a href="https://github.com/Emedeo22" target="_blank" rel="noopener noreferrer"><FaGithub className="footer__icon" /></a>           
            <FaSass className="footer__icon" />
            <FaJs className="footer__icon" />
            <FaHtml5 className="footer__icon" />
        </p>
      </div>
      <div className="project">
        <h3 className="project__title">Sofcell 2.0 E-commerce</h3>
        <div className='container_img'>
          <img className='project__img' src="/sofcell2_1.webp" alt='S warranty' />
        </div>
        <p className="project__description">
        <a href='https://store-app-sofcell.vercel.app/'><FaExternalLinkAlt className="footer__icon" /></a>
        <a href="https://github.com/Emedeo22" target="_blank" rel="noopener noreferrer"><FaGithub className="footer__icon" /></a>
        <FaReact className="footer__icon" />
        <FaCss3Alt className="footer__icon" />
        <FaHtml5 className="footer__icon" />
        </p>
        
      </div>
      <div className="project">
        <h3 className="project__title">MDEO Servicio Tecnico</h3>
        <div className='container_img'>
          <img className='project__img' src="/953shots_so.png" alt='S warranty' />
        </div>
        <p className="project__description">
          <a href="https://github.com/Emedeo22" target="_blank" rel="noopener noreferrer">

          </a>
          <a href='https://github.com/Emedeo22'>
          <FaExternalLinkAlt className="footer__icon" />
          </a>
          <FaGithub className="footer__icon" />
          <SiAstro className="footer__icon" />
        </p>
      </div>
    </section>
  );
}

export default Projects;
