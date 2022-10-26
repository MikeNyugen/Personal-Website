import "./Projects.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stack from "@mui/material/Stack";

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
      <h1 id="projects" className="projects-heading">Projects</h1>
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
