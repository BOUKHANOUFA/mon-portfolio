import './Skills.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faReact, faGitAlt, faFigma } from '@fortawesome/free-brands-svg-icons';

function Skills() {
  const skillsList = [
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'JavaScript', icon: faSquareJs },
    { name: 'React', icon: faReact },
    { name: 'Git', icon: faGitAlt },
    { name: 'Figma', icon: faFigma },
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Mes compétences</h2>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card">
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;