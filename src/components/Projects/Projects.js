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
      {true ? (
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

          <div className="key-features">
            <h4>Key Features:</h4>
            <ul>
              <li>
                Log into any bank account to view balance and transactions
                history
              </li>
              <li>View top places where users have spent money</li>
              <li>
                View where you have spent your money on an interactive map
              </li>
            </ul>
          </div>

          <div className="banksee-technologies">
            <h4>Technologies:</h4>
            <span>Front-end: Svelte, TypeScript</span>
            <br></br>
            <span>Back-end: Gin, Go, TrueLayer</span>
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
            Implemented a bespoke web application to streamline the ethical
            review process at the University of St Andrews.
          </p>
        </div>

        <div className="key-features">
          <h4>Key Features:</h4>
          <ul>
            <li>Automated the process ethical applciation process</li>
            <li>File upload and download</li>
          </ul>
        </div>

        <div className="technologies">
          <h4>Technologies:</h4>
          <span>Front-end: React, GraphQL TypeScript</span>
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
            Implemented an application to streamline the ethical review process
            at the University of St Andrews.
          </p>
        </div>

        <div className="key-features">
          <h4>Key Features:</h4>
          <ul>
            <li>Automated the process ethical applciation process</li>
            <li>File upload and download</li>
          </ul>
        </div>

        <div className="technologies">
          <h4>Technologies:</h4>
          <p>Processing (Java)</p>
        </div>
      </div>

      <div className="linear-codes">
        <h2 className="project-title2">Linear Codes from Bipartite Graphs</h2>
        <SlideShow imageList={codeImages} />
        <LogoStack logoList={codeLogoList} codeAvailable={false} />
        <div className="project-summary2">
          <h4>Project Summary:</h4>
          <p>
            An interactive application to derive linear error-correcting codes
            given a user-generated parity-check graph. The purpose of the tool
            was to provide an interactive learning tool for students at the
            University of York enrolled in the information theory module.
          </p>
        </div>

        <div className="key-features">
          <h4>Key Features:</h4>
          <ul>
            <li>Automated the process ethical applciation process</li>
            <li>File upload and download</li>
          </ul>
        </div>

        <div className="technologies">
          <h4>Technologies:</h4>
          <p>JavaFx, Java, Maven</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
