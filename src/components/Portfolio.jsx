import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// function Portfolio({ projectData }) {
//   return (
//     <section>
//       <h2>Portfolio</h2>
//       <div className="project-grid">
//         {projectData ? ( // Check if projectData exists
//           projectData.map((project) => (
//             <Project
//               key={project.title}
//               title={project.title}
//               image={project.image}
//               deployedLink={project.deployedLink}
//               githubLink={project.githubLink}
//             />
//           ))
//         ) : (
//           <p>Loading projects...</p> // Display a loading message
//         )}
//       </div>
//     </section>
//   );
// }

function Portfolio({ projectData }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projectData) {
      setProjects(projectData);
    }
  }, [projectData]); // Dependency array

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project) => ( // Use 'projects' instead of 'projectData'
          // ... (rest of the Project rendering code)
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
