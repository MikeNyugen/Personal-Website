import "./Introduction.css";
import SocialStack from "../SocialStack/SocialStack";

const Introduction = () => {
  return (
    <div className="introduction-div">
      <h1 className="name">
        Hey I'm Mike{" "}
        <a href="https://www.youtube.com/watch?v=TGO6gQbm0v4" target="_blank">
          Nguyen.
        </a>
      </h1>
      <h2 className="job-title">&#128187; Full-stack software engineer</h2>
      <div className="profile-description">
        <p>
          Hey I’m Mike, I recently graduated from the{" "}
          <a href="https://www.st-andrews.ac.uk/" target="_blank">
            <strong>University of St Andrews </strong>
          </a>
          with a <strong>MSc in computer science</strong>. I’m currently looking
          for full-time software engineering roles in London. Check out my{" "}
          <a href="#projects">
            <strong>projects</strong>
          </a>{" "}
          below &#128522;
        </p>
      </div>

      <SocialStack />

      <div className="down-arrow">
        <a href="#projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            class="bi bi-arrow-down-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
