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

const Projects = () => {
  return (
    <>
      <h1 id="projects" className="projects-heading">
        Projects
      </h1>
      {false ? (
        <div className="banksee">
          <h2 className="project-title">BankSee (In progress)</h2>
          <SlideShow imageList={deadImages} />
          <LogoStack logoList={bankseeLogoList} codeAvailable={false} />
          <div className="project-summary">
            <h4>Project Summary:</h4>
            <p>
              A web application leveraging{" "}
              <a
                href="https://www.gov.uk/government/publications/update-governance-of-open-banking/update-on-open-banking"
                target="_blank"
              >
                <strong>Open Banking </strong>
              </a>
              to allow users to gain more insight into their banking habits.
              Uses{" "}
              <a href="https://truelayer.com/" target="_blank">
                <strong>Truelayer</strong>
              </a>{" "}
              as the open banking provider.
            </p>
          </div>

          <div className="banksee-key-features">
            <h4>Key Features:</h4>
            <ul>
              <li>
                Log into any bank account to view balance and transactions
                history.
              </li>
              <li>View top places where users have spent money.</li>
              <li>
                View where you have spent your money on an interactive map.
              </li>
            </ul>
          </div>

          <div className="banksee-technologies">
            <h4>Technologies:</h4>
            <span>Front-end: React, TypeScript</span>
            <br></br>
            <span>Back-end: .NET Core, C#, TrueLayer</span>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="ethical-review">
        <h2 className="project-title">Ethical Review Management System</h2>
        <SlideShow imageList={ethicalImages} />
        <LogoStack logoList={ethicalLogoList} codeAvailable={true} />
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
              Automated the ethical application process for students, staff
              members, and administrators.
            </li>
            <li>
              Users can view the history of an application including the files,
              comments, and feedback.
            </li>
          </ul>
        </div>

        <div className="ethical-technologies">
          <h4>Technologies:</h4>
          <span>Front-end: React, TypeScript</span>
          <br></br>
          <span>Back-end: Spring Boot, Java, PostgreSQL</span>
        </div>
      </div>

      <div className="spread-the-dead">
        <h2 className="project-title">Spread the Dead</h2>
        <SlideShow imageList={deadImages} />
        <LogoStack logoList={deadLogoList} codeAvailable={false} />
        <div className="project-summary">
          <h4>Project Summary:</h4>
          <p>
            A zombie-themed real-time stategy game similar to{" "}
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
            . The game engine including the artificial intelligence and the
            camera system was implemented from scratch.
          </p>
        </div>

        <div className="dead-key-features">
          <h4>Key Features:</h4>
          <ul>
            <li>Path planning implemented using the A* algorithm.</li>
            <li>Mini-map displaying the movement of all units.</li>
          </ul>
        </div>

        <div className="dead-technologies">
          <h4>Technologies:</h4>
          <p>Processing (Java)</p>
        </div>
      </div>

      <div className="linear-codes">
        <a
          href="https://github.com/MikeNyugen/Tanner-Graphs-to-Linear-Codes"
          target="_blank"
        >
          {" "}
          <h2 className="project-title">Linear Codes from Bipartite Graphs</h2>
        </a>

        <SlideShow imageList={codeImages} />
        <LogoStack logoList={codeLogoList} codeAvailable={false} />
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
            ). The purpose of the tool was to provide an interactive learning
            tool for students at the University of York enrolled in the
            information theory module.
          </p>
        </div>

        <div className="code-key-features">
          <h4>Key Features:</h4>
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Code" target="_blank">
                <strong>Code words</strong>
              </a>{" "}
              can be calculated automatically from the bipartite graph.
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
    </>
  );
};

export default Projects;
