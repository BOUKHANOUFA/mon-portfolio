import './About.css';
import aboutImg from "../../assets/about-img.png";

function About() {
  return (
    <section className="about-section" id='about'>
      <div className="about-container">
        
       
        <div className="about-image-container">
          <img src={aboutImg} alt="Illustration À propos" className="about-image" />
        </div>

       
        <div className="about-content">
          <h2 className="about-title">À propos de moi</h2>
          <p className="about-description">
            Passionnée par le développement web, j'aime créer des expériences numériques utiles et esthétiques. Toujours curieuse, j'apprends et je m'améliore chaque jour.
          </p>
          <a href="#skills" className="btn-about">En savoir plus</a>
        </div>

      </div>
    </section>
  );
}

export default About;