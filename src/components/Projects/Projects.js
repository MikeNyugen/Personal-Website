import "./Projects.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const Projects = () => {
  const fadeImages = [
    {
      url: "https://drive.google.com/uc?export=view&id=1FqxdFnoBxPGAFujTEay-Yf0hXG0cIkeU",
      caption: "First Slide",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1wkD0VCWPJEFkUJUoNfKdLrcLAE4bLY-V",
      caption: "Second Slide",
    },
  ];

  const properties = {
    prevArrow: (
      <button className="slide-button-left">
        <ArrowBackIosIcon />
      </button>
    ),
    nextArrow: (
      <button className="slide-button-right">
        <ArrowForwardIosIcon />
      </button>
    ),
  };

  return (
    <>
      <h1 id="projects" className="projects-heading">
        Projects
      </h1>
      <div className="banksee">
        <h2 className="project-title">BankSee (In progress)</h2>
        <Fade
          duration={5000}
          transitionDuration={500}
          indicators={true}
          {...properties}
        >
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <img className="project-image" src={fadeImage.url} alt="image" />
            </div>
          ))}
        </Fade>

        <div className="logo-stack">
          <Stack direction="row" spacing={3}>
            <a
              className="tech-logo"
              href="https://reactjs.org/"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></img>
            </a>
            <a
              className="tech-logo"
              href="https://www.typescriptlang.org/"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"></img>
            </a>
            <a
              className="tech-logo"
              href="https://firebase.google.com/"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"></img>
            </a>
            <p className="source-code">
              Source code can be made available upon request
            </p>
          </Stack>
        </div>

        <div className="project-summary">
          <h3>Project Summary:</h3>
          <p>
            An application leveraging open banking to allow users to gain more
            insight into their banking habits.
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

      <div className="ethical-review">
        <h2 className="project-title">Ethical Review Management System</h2>

        <Fade duration={5000} indicators={true} {...properties}>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <img className="project-image" src={fadeImage.url} alt="image" />
            </div>
          ))}
        </Fade>

        <div className="logo-stack">
          <Stack direction="row" spacing={3}>
            <a
              className="tech-logo"
              href="https://reactjs.org/"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></img>
            </a>
            <a
              className="tech-logo"
              href="https://www.typescriptlang.org/"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"></img>
            </a>
            <a
              className="tech-logo"
              href="https://spring.io/projects/spring-boot"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"></img>
            </a>
            <a
              className="postgres-logo"
              href="https://www.postgresql.org/"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"></img>
            </a>
            <a
              className="gradle-logo"
              href="https://gradle.org/"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Gradle_logo.png"></img>
            </a>

            <Tooltip
              title="Source code"
              placement="top"
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 150 }}
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    fontSize: "20px",
                    backgroundColor: "white",
                    "& .MuiTooltip-arrow": {
                      color: "white",
                      width: "0px",
                    },
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  },
                },
              }}
            >
              <a
                className="github"
                href="https://github.com/MikeNyugen/Ethical-Review-Application"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </Tooltip>
          </Stack>
        </div>

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

      <div className="spread-the-dead">
        <h2 className="project-title">Spread the Dead</h2>

        <Fade duration={5000} indicators={true} {...properties}>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <img className="project-image" src={fadeImage.url} alt="image" />
            </div>
          ))}
        </Fade>

        <div className="logo-stack">
          <Stack direction="row" spacing={3}>
            <a href="https://processing.org/" target="_blank">
              <img
                className="tech-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg"
              ></img>
            </a>
            <p className="source-code2">
              Source code can be made available upon request
            </p>
          </Stack>
        </div>

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

      <div className="linear-codes">
        <h2 className="project-title">Linear Codes from Bipartite Graphs</h2>

        <Fade duration={5000} indicators={true} {...properties}>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <img className="project-image" src={fadeImage.url} alt="image" />
            </div>
          ))}
        </Fade>

        <div className="logo-stack">
          <Stack direction="row" spacing={3}>
            <a href="https://openjfx.io/" target="_blank">
              <img
                className="javafx-logo"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/JavaFX_Logo.png/120px-JavaFX_Logo.png"
              ></img>
            </a>
            <Tooltip
              title="Source code"
              placement="top"
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 150 }}
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    fontSize: "20px",
                    backgroundColor: "white",
                    "& .MuiTooltip-arrow": {
                      color: "white",
                      width: "0px",
                    },
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  },
                },
              }}
            >
              <a
                className="github2"
                href="https://github.com/MikeNyugen/Ethical-Review-Application"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </Tooltip>
          </Stack>
        </div>

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
