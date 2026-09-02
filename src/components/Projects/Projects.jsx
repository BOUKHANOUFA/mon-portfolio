import "./Projects.css";
import ProjectCard from "./ProjectCard";
import argentBankImg from "../../assets/argent-bank.png";
import sophieBluelImg from "../../assets/sophie-bluel.png";

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "ArgentBank",
      description: `• Contexte : Développement du frontend d'une nouvelle banque en ligne.
• Objectifs : Créer un tableau de bord utilisateur dynamique et sécurisé.
• Stack technique : React, Redux Toolkit, React Router, API REST.
• Compétences développées : Gestion d'état globale complexe, authentification via token JWT et intégration d'API.
• Résultats et impact : Interface responsive optimisée offrant une expérience utilisateur fluide.
• Perspectives d'amélioration : Implémentation des transactions futures et gestion complète des cartes bancaires.`,
      image: argentBankImg,
      techs: ["React", "Redux Toolkit", "API REST", "JWT"],
      githubLink: "https://github.com/BOUKHANOUFA/ArgentBank-Frontend",
    },
    {
      id: 2,
      title: "Sophie Bluel",
      description: `• Contexte : Création du site vitrine d'une architecte d'intérieur.
• Objectifs : Permettre la présentation des travaux et la gestion dynamique des galeries.
• Stack technique : JavaScript , HTML5, CSS3, API REST.
• Compétences développées : Manipulation avancée du DOM, gestion des appels asynchrones (Fetch) et modale d'upload sécurisée.
• Résultats et impact : Espace administrateur opérationnel permettant l'ajout/suppression de projets en direct.
• Perspectives d'amélioration : Migration de la base de code sous React pour une meilleure maintenabilité.`,
      image: sophieBluelImg,
      techs: ["JavaScript", "API REST", "HTML / CSS"],
      githubLink:
        "https://github.com/BOUKHANOUFA/Portfolio-architecte-sophie-bluel-",
    },
  ];

  return (
    <section className="projects-section" id="projects">
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
