import "./Projects.css";
import "react-slideshow-image/dist/styles.css";
import LogoStack from "../LogoStack/LogoStack";
import SlideShow from "../SlideShow/SlideShow";
import { bankseeImages } from "../../Images/Links";
import { ethicalImages } from "../../Images/Links";
import { deadImages } from "../../Images/Links";
import { codeImages } from "../../Images/Links";
import { bankseeLogoList } from "../../Images/Links";
import { ethicalLogoList } from "../../Images/Links";
import { deadLogoList } from "../../Images/Links";
import { codeLogoList } from "../../Images/Links";
import useWindowDimensions from "../WindowDimensions";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  AOS.init(); // Animation init
  const { height, width } = useWindowDimensions();

  return (
    <div>
      <h1 id="projects" className="projects-heading">
        Projects
      </h1>
      {true ? (
        <div
          className="banksee"
          data-aos="fade-left"
          data-aos-duration="750"
          data-aos-once="true"
        >
          <h2 className="project-title">BankSee (In progress)</h2>
          {width > 428 ? (
            <SlideShow imageList={bankseeImages} isWeb={false} />
          ) : (
            <></>
          )}
          <LogoStack logoList={bankseeLogoList} isWeb={false} />
          <div className="project-summary3">
            <h4>Project Summary:</h4>
            <p>
              A cross-platform mobile app that provides a financial equivalent
              to Spotify's{" "}
              <a
                href="https://en.wikipedia.org/wiki/Spotify_Wrapped"
                target="_blank"
              >
                <strong>Spotify Wrapped</strong>
              </a>{" "}
              feature. Uses{" "}
              <a href="https://truelayer.com/" target="_blank">
                <strong>Truelayer</strong>
              </a>{" "}
              APIs to connect to user bank accounts securely.
            </p>
          </div>

          <div className="banksee-key-features">
            <h4>Key Features:</h4>
            <ul>
              <li>
                View the merchants where you have spent the most money over the
                past year.
              </li>
              <li>Log into any bank account supported by TrueLayer.</li>
            </ul>
          </div>

          <div className="banksee-technologies">
            <h4>Technologies:</h4>
            <span>Frontend: React Native, TypeScript</span>
            <br></br>
            <span>Backend: Spring Boot, Kotlin, TrueLayer</span>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div
        className="ethical-review"
        data-aos="fade-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <h2 className="project-title">Ethical Review Management System</h2>
        <SlideShow imageList={ethicalImages} isWeb={true} />
        <LogoStack logoList={ethicalLogoList} isWeb={true} />
        <div className="project-summary">
          <h4>Project Summary:</h4>
          <p>
            Implemented a bespoke web application to streamline the
            <a
              href="https://www.st-andrews.ac.uk/research/integrity-ethics/humans/applications/ethical-review/"
              target="_blank"
            >
              <strong> ethical application process </strong>
            </a>
            at the University of St Andrews. Worked closely with staff members
            on the ethics committee to develop and test system requirements.
          </p>
        </div>

        <div className="ethical-key-features">
          <h4>Key Features:</h4>
          <ul>
            <li>
              Automated the ethical application process for students, faculty,
              and administrators.
            </li>
            <li>
              Users can view the history of an application, including the files,
              comments, and feedback.
            </li>
          </ul>
        </div>

        <div className="ethical-technologies">
          <h4>Technologies:</h4>
          <span>Frontend: React, TypeScript</span>
          <br></br>
          <span>Backend: Spring Boot, Java, PostgreSQL</span>
        </div>
      </div>

      <div
        className="spread-the-dead"
        data-aos="fade-left"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <h2 className="project-title">Spread the Dead</h2>
        <SlideShow imageList={deadImages} isWeb={true} />
        <LogoStack logoList={deadLogoList} isWeb={true} />
        <div className="project-summary">
          <h4>Project Summary:</h4>
          <p>
            A zombie-themed real-time strategy game similar to{" "}
            <a
              href="https://supercell.com/en/games/clashofclans/"
              target="_blank"
            >
              {" "}
              <strong>Clash of Clans </strong>
            </a>
            developed using{" "}
            <a href="https://processing.org/" target="_blank">
              <strong>Processing</strong>
            </a>
            . The game engine was implemented from scratch, including artificial
            intelligence and the camera system.
          </p>
        </div>

        <div className="dead-key-features">
          <h4>Key Features:</h4>
          <ul>
            <li>
              Path planning implemented using the{" "}
              <a
                href="https://en.wikipedia.org/wiki/A*_search_algorithm"
                target="_blank"
              >
                <strong>A* algorithm</strong>
              </a>
              .
            </li>
            <li>Mini-map displaying the movement of all units in real-time.</li>
          </ul>
        </div>

        <div className="dead-technologies">
          <h4>Technologies:</h4>
          <p>Processing (Java)</p>
        </div>
      </div>

      <div
        className="linear-codes"
        data-aos="fade-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <a
          href="https://github.com/MikeNyugen/Tanner-Graphs-to-Linear-Codes"
          target="_blank"
        >
          {" "}
          <h2 className="project-title">Linear Codes from Bipartite Graphs</h2>
        </a>

        <SlideShow imageList={codeImages} isWeb={true} />
        <LogoStack logoList={codeLogoList} isWeb={true} />
        <div className="project-summary">
          <h4>Project Summary:</h4>
          <p>
            An interactive application to derive{" "}
            <a
              href="https://en.wikipedia.org/wiki/Error_correction_code"
              target="_blank"
            >
              <strong>linear error-correcting codes </strong>
            </a>
            given a user-generated parity-check graph (also known as{" "}
            <a
              href="https://en.wikipedia.org/wiki/Tanner_graph"
              target="_blank"
            >
              <strong>Tanner graphs</strong>
            </a>
            ). The tool's purpose was to provide an interactive learning tool
            for students at the University of York enrolled in the information
            theory module.
          </p>
        </div>

        <div className="code-key-features">
          <h4>Key Features:</h4>
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Code" target="_blank">
                <strong>Code words</strong>
              </a>{" "}
              can be automatically calculated using the bipartite graph.
            </li>
            <li>
              Nodes can be dragged and rearranged with the connections
              maintained.
            </li>
          </ul>
        </div>

        <div className="code-technologies">
          <h4>Technologies:</h4>
          <p>JavaFX, Java</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
