import Project from "./Project";
import PropTypes from "prop-types";

function Portfolio({ projectData }) {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projectData.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

Portfolio.propTypes = {
  projectData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      deployedLink: PropTypes.string.isRequired,
      githubLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Portfolio;
