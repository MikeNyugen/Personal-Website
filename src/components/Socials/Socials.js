import "./Socials.css";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@material-ui/core/Link";

const Socials = () => {
  return (
    <div className="social-div">
      <a href="https://github.com/MikeNyugen" target="_blank">
        <img className="icon" src={require("./github.png")} />
      </a>

      <a href="https://www.linkedin.com/in/mike-n-644b901b3/" target="_blank">
        <img className="icon" src={require("./linkedin.png")} />
      </a>

      <a href="https://www.linkedin.com/in/mike-n-644b901b3/" target="_blank">
        <img className="icon" src={require("./mail.png")} />
      </a>
    </div>
  );
};

export default Socials;
