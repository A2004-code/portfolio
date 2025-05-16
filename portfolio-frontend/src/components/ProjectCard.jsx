const ProjectCard = ({ image, title, description, category, technologies, link }) => (
  <div className="project-card">
    <div className="project-image">
      <img src={image} alt={title} />
      <div className="project-overlay">
        <a href={link} className="view-project">View Project</a>
      </div>
    </div>
    <div className="project-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard; 