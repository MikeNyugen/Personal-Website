import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="project-div">
        <h2 className="project-title">Ethical Review Management System</h2>
        <img
          className="project-image"
          src={require("./ethical-review.png")}
          alt="image"
          width="1000px"
        />
        <div className="project-summary">
          <h3>Project Summary:</h3>
          <p>
            Implemented an application to streamline the ethical review process
            at the University of St Andrews.
          </p>
          <h4>Key Features:</h4>
          <ul>
            <li>Automated the process ethical applciation process</li>
            <li>File upload and download</li>
          </ul>

          <h4>Technologies:</h4>
          <p>Front-end: React, TypeScript</p>
          <p>Back-end: Spring Boot, Java, PostgreSQL</p>
        </div>
      </div>
     
      <div className="project-div">
        <h2 className="project-title">Spread the Dead</h2>
        <img
          className="project-image"
          src={require("./spread-the-dead.gif")}
          alt="image"
          width="1000px"
        />
        <div className="project-summary">
          <h3>Project Summary:</h3>
          <p>
            Implemented an application to streamline the ethical review process
            at the University of St Andrews.
          </p>
          <h4>Key Features:</h4>
          <ul>
            <li>Automated the process ethical applciation process</li>
            <li>File upload and download</li>
          </ul>

          <h4>Technologies:</h4>
          <p>Processing (Java)</p>
        </div>
      </div>

      <div className="project-div">
        <h2 className="project-title">Linear Codes from Bipartite Graphs</h2>
        <img
          className="project-image"
          src={require("./spread-the-dead.gif")}
          alt="image"
          width="1000px"
        />
        <div className="project-summary">
          <h3>Project Summary:</h3>
          <p>
            Implemented an application to streamline the ethical review process
            at the University of St Andrews.
          </p>
          <h4>Key Features:</h4>
          <ul>
            <li>Automated the process ethical applciation process</li>
            <li>File upload and download</li>
          </ul>

          <h4>Technologies:</h4>
          <p>Processing (Java)</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
