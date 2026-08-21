import './Hero.css';
import heroImg from "../../assets/hero-img.jpg";
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hello ! je suis</p>
        <h1 className="hero-name">BOUKHANOUFA SAMIRA</h1>
        <h2 className="hero-title">Intégratrice Web</h2>
        <p className="hero-description">
          Je crée des sites et applications web modernes, rapides et responsives.
        </p>

        <div className="hero-buttons">
          <a href="#projets" className="btn btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn btn-secondary">Me contacter</a>
        </div>

      <div className="hero-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a href="mailto:votre-email@example.com">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;