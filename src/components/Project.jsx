import React from "react";

function Portfolio({ title, image, deployedLink, githubLink }) {
  const projectData = [
    {
      title: "Project 1",
      image: "./assets/project1.png",
      deployedLink: "https://deployed-project1.com",
      githubLink: "https://github.com/your-username/project1-repo",
    },
    {
      title: "Project 2",
      image: "./assets/project2.png",
      deployedLink: "https://deployed-project2.com",
      githubLink: "https://github.com/your-username/project2-repo",
    },
    // Add more project objects as needed
  ];
  
  return (
    <div className="project">
      <img src={projectData.image} alt={projectData.title} />
      <h2>{projectData.title}</h2>
      <a href={projectData.deployedLink} target="_blank" rel="noopener noreferrer">
        View Deployed Project
      </a>
      <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

export default Portfolio;
