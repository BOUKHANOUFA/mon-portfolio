import React from 'react';

function ProjectCard({ title, description, image, techs, githubLink }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={`Projet ${title}`} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-description" style={{ whiteSpace: 'pre-line' }}>
         {description}
        </p>
        
        <div className="project-techs">
          {techs.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-projet"
        >
          Voir sur GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;