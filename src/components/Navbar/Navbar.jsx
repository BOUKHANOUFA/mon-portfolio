
import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <a href="#" className="logo">
          SB<span className="logo-dot">.</span>
        </a>

        
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </div>

        
         <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#accueil" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="#a-propos" onClick={() => setIsOpen(false)}>À propos</a>
          <a href="#competences" onClick={() => setIsOpen(false)}>Compétences</a>
          <a href="#projets" onClick={() => setIsOpen(false)}>Projets</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

        <a href="#cv" className="btn-cv">Télécharger CV</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;