import React from 'react'
import { FaReact } from 'react-icons/fa';

import "./About.css"
export const presentation = () => {
  return (
    
    <div className='presentation'>
      <div className="about-text-container">
      <p className="presentation__text">
          <span className='span'>mi nombre es </span> nicolas montes de oca<span className='span'> Front End Developer</span>
          </p>
      </div>
        
        <p className='presentation__text'>
        ¡BIENVENIDO A BORDO DE MI BARCO,<span className='span'>DISEÑADO</span> CON UNA FERVIENTE<span className='span'> PASIÓN </span> POR FORJAR<span className='span'>  SOLUCIONES</span>  QUE DESAFÍAN <span className='span'>LOS LÍMITES</span> DE LA COMPRENSIÓN HUMANA!
       
        </p>
        <p className='presentation__text'>
        ADELANTE, VALIENTE<span className='span'>VIAJERO DE LAS ESTRELLAS</span> AVENTÚRATE EN EL IMPRESIONANTE<span className='span'>COSMOS</span>  DE LA <span className='span'>INNOVACIÓN</span> Y LA EFICIENCIA. UN<span className='span'> UNIVERSO</span> DONDE LAS IDEAS SE TRANSFORMAN EN<span className='span'> MARAVILLOSAS REALIDADES</span> TECNOLÓGICAS, DONDE<span className='span'> LAS ESTRELLAS</span> SON TUS PROYECTOS Y LAS <span className='span'> CONSTELACIONES</span> DE ÉXITO ESTÁN A TU ALCANCE.
        </p>
        <p className='presentation__text'>
        MI<span className='span'> EXPERIENCIA</span> EN TECNOLOGÍAS<span className='span'> MÍSTICAS</span> COMO<FaReact className='react'/> <span className='span'>REACT</span><FaReact className='react'/>TE SERVIRÁ DE<span className='span'> PROPULSIÓN</span> PARA ATRAVESAR <span className='span'> FRONTERAS INIMAGINABLES</span> Y ELEVAR TUS PROYECTOS A NUEVAS<span className='span'> ALTURAS ESTELARES</span>.
        </p>
        
    </div>
  )
}
export default presentation