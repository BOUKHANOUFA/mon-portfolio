
import "./About.css";
import aboutImg from "../../assets/about-img.avif";

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
            Passionnée par la création d'interfaces modernes,
            accessibles et responsive, j'ai terminé ma formation
            chez OpenClassrooms, validée en octobre 2026.
            <br /><br />
            J'ai réalisé plusieurs projets pratiques, notamment
            ArgentBank et Sophie Bluel, en utilisant HTML, CSS,
            JavaScript, React, Git et les API REST.
            <br /><br />
            Sérieuse, curieuse et persévérante, je souhaite
            continuer à progresser en Front-End et intégrer une
            équipe pour mettre mes compétences en pratique.
          </p>

          <div className="certification">
            <h3>Ma certification</h3>
            <p>
              <strong>Développeur informatique</strong>
              <br />
              Certification professionnelle — Niveau 5 (RNCP)
              <br />
              OpenClassrooms — Octobre 2026
            </p>
          </div>

          <a href="#skills" className="btn-about">
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
