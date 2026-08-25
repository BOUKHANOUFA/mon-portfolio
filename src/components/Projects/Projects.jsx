import './Projects.css';
import argentBankImg from '../../assets/argent-bank.png';
import sophieBluelImg from '../../assets/sophie-bluel.png';

function Projects() {
  return (
    <section className="projects-section" id='projects'>
      <div className="projects-container">
        <h2 className="projects-title">Mes projets</h2>

        <div className="projects-grid">
      
          <div className="project-card">
            <div className="project-image-container">
              <img src={argentBankImg} alt="Projet Argent Bank" className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-card-title">ArgentBank</h3>
              <p className="project-description">
                Application bancaire responsive développée en React, intégrant l'authentification utilisateur et la gestion d'état globale avec Redux Toolkit. Communication complète avec l'API REST backend.
              </p>
              
              <div className="project-techs">
                <span>React</span>
                <span>Redux Toolkit</span>
                <span>API REST</span>
              </div>

              <a 
                href="https://github.com/BOUKHANOUFA/ArgentBank-Frontend" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-projet"
              >
                Voir sur GitHub
              </a>
            </div>
          </div>

         
          <div className="project-card">
            <div className="project-image-container">
              <img src={sophieBluelImg} alt="Projet Sophie Bluel" className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-card-title">Sophie Bluel</h3>
              <p className="project-description">
                Portfolio dynamique pour une architecte d'intérieur avec filtrage par catégorie et espace administrateur sécurisé pour la gestion des projets via une API REST.
              </p>

              <div className="project-techs">
                <span>JavaScript</span>
                <span>API REST</span>
                <span>HTML / CSS</span>
              </div>

 <a 
  href="https://github.com/BOUKHANOUFA/Portfolio-architecte-sophie-bluel-" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn-projet"
>
  Voir sur GitHub
</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;