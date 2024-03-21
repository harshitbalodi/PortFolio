/* eslint-disable react/prop-types */

const Project = ({ title, description, technologies, image }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your project.',
      technologies: ['React', 'Node.js'],
      image: 'project1.png', // Replace with your image path
    },
    // Add more project objects here
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
