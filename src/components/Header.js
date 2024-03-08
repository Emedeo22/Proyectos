import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RiCodeBoxLine, RiContactsBook2Line , RiFingerprintFill } from 'react-icons/ri';
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header bg-dark py-3">
      <div className="container d-flex justify-content-center align-items-center flex-column">
       
        <nav className="header__nav mt-3">
          <div className="container d-flex justify-content-center">
            <ul className={`header__nav-list ${isMenuOpen ? 'active' : ''}`}>
              <li className="header__nav-item">
                <Link
                  to="presentation"
                  smooth={true}
                  duration={500}
                  className="transition-link"
                  activeClass="active"
                  onClick={toggleMenu}
                > 
                  <RiFingerprintFill className="header__nav-icon" />
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="transition-link"
                  activeClass="active"
                  onClick={toggleMenu}
                >
                  <RiCodeBoxLine className="header__nav-icon" />
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="transition-link"
                  activeClass="active"
                  onClick={toggleMenu}
                >
                  <RiContactsBook2Line className="header__nav-icon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="menu-toggle__line"></span>
            <span className="menu-toggle__line"></span>
            <span className="menu-toggle__line"></span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;