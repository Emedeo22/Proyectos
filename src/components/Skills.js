import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact } from 'react-icons/fa';
import { SiAstro } from "react-icons/si";

import './Technologies.css';

function Technologies() {
  const technologiesRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // El umbral de visibilidad del componente (50% visible)
    };

    const observer = new IntersectionObserver(handleObserver, options);
    const currentRef = technologiesRef.current; // Copia la referencia en una variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBarElements = entry.target.querySelectorAll('.technology__water');
        progressBarElements.forEach((element) => {
          const percentage = parseInt(element.getAttribute('data-percentage'), 10);
          const progressBar = element.querySelector('.progress-bar');
          progressBar.style.width = '0';
          setTimeout(() => {
            progressBar.style.width = `${percentage}%`;
          }, 0);
        });
      }
    });
  };

  return (
    <div className="technologies" ref={technologiesRef}>
      <h2 className="technologies__title">SKILLS:</h2>
      <ul className="technologies__list">
        <li className="technologies__item">
          <div className="technology">
            <div className="technology__name"><FaHtml5 className='icon' /></div>
            <div className="technology__progress">
              <div className="technology__water" data-percentage="50">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="technologies__item">
          <div className="technology">
            <div className="technology__name"><FaCss3Alt className='icon' /></div>
            <div className="technology__progress">
              <div className="technology__water" data-percentage="40">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="technologies__item">
          <div className="technology">
            <div className="technology__name"><FaSass className='icon' /></div>
            <div className="technology__progress">
              <div className="technology__water" data-percentage="40">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="technologies__item">
          <div className="technology">
            <div className="technology__name"><FaJs className='icon' /></div>
            <div className="technology__progress">
              <div className="technology__water" data-percentage="45">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="technologies__item">
          <div className="technology">
            <div className="technology__name"><FaReact className='icon' /></div>
            <div className="technology__progress">
              <div className="technology__water" data-percentage="50">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
        </li>
        <li className="technologies__item">
          <div className="technology">
            <div className="technology__name"><SiAstro className='icon' /></div>
            <div className="technology__progress">
              <div className="technology__water" data-percentage="30">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Technologies;
