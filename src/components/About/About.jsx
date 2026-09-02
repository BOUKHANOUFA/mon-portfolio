import "./About.css";
import aboutImg from "../../assets/about-img.png";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-container">
          <img
            src={aboutImg}
            alt="Illustration À propos"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <h2 className="about-title">À propos de moi</h2>
          <p className="about-description">
           passionnée par la création d'interfaces modernes, accessibles et responsive.

Après ma formation d'Intégratrice Web chez OpenClassrooms, 
j'ai développé mes compétences en HTML, CSS, JavaScript, 
React, Git et API REST, 
à travers plusieurs projets comme ArgentBank et Sophie Bluel.

Sérieuse, curieuse et persévérante, je souhaite aujourd'hui continuer à progresser en Front-End et intégrer une équipe afin de mettre mes compétences en pratique et évoluer dans le domaine du web.
          </p>
          <a href="#skills" className="btn-about">
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
