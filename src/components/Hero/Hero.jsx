import './Hero.css';
import heroImg from "../../assets/hero-img.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-intro">Bonjour, je suis</p>
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
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:ton-email@example.com" aria-label="Email">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        {/* Remplace l'attribut src par le chemin vers ta vraie photo */}
        <img src={heroImg} alt="Samira's Toolkit" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;