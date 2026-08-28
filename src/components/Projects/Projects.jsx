import './Projects.css';
import ProjectCard from './ProjectCard';
import argentBankImg from '../../assets/argent-bank.png';
import sophieBluelImg from '../../assets/sophie-bluel.png';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "ArgentBank",
      description: "Application bancaire responsive développée en React, intégrant l'authentification utilisateur et la gestion d'état globale avec Redux Toolkit. Communication complète avec l'API REST backend.",
      image: argentBankImg,
      techs: ["React", "Redux Toolkit", "API REST"],
      githubLink: "https://github.com/BOUKHANOUFA/ArgentBank-Frontend"
    },
    {
      id: 2,
      title: "Sophie Bluel",
      description: "Portfolio dynamique pour une architecte d'intérieur avec filtrage par catégorie et espace administrateur sécurisé pour la gestion des projets via une API REST.",
      image: sophieBluelImg,
      techs: ["JavaScript", "API REST", "HTML / CSS"],
      githubLink: "https://github.com/BOUKHANOUFA/Portfolio-architecte-sophie-bluel-"
    }
  ];

  return (
    <section className="projects-section" id='projects'>
      <div className="projects-container">
        <h2 className="projects-title">Mes projets</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              techs={project.techs}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;