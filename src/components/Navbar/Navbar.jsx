import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-header">
      <nav className="navbar" aria-label="Navigation principale">
        <a href="#" className="logo" aria-label="Accueil - Samira Boukhanoufa">
          SB<span className="logo-dot">.</span>
        </a>

       
        <button 
          className="menu-icon" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="#about" onClick={() => setIsOpen(false)}>À propos</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Compétences</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projets</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

         <a 
  href="/cv-Samira-Boukhanoufa.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn-cv"
>
  Télécharger mon CV
</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;