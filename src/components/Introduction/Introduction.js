import "./Introduction.css";
import Socials from "../Socials/Socials"

const Introduction = () => {
  return (
    <div className="introduction-div">
      <h1 className="name">Hey I'm Mike Nguyen </h1>
      <h2 className="job-title">&#128187; Full-stack software engineer</h2>
      <p className="profile-description">
        Hey I’m Mike, I recently graduated from the University of St Andrews
        with a MSc in computer science. I’m currently looking for full-time
        software engineering roles in London. Check out my{" "}
        <strong>projects</strong> below &#128522;
      </p>
      
      <Socials />
    </div>
  );
};

export default Introduction;
