import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects-div">
        <h1 className="projects-heading">Projects</h1>
      </div>

      <div className="project-image">
        <img
          src={require("./ethical-review.png")}
          alt="image"
          width="1000px"
        />
      </div>

      <div className="project-image">
        <img
          src={require("./spread-the-dead.png")}
          alt="image"
          width="1000px"
        />
      </div>
    </>
  );
};

export default Projects;
