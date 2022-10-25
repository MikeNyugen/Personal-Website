import "./Socials.css";

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
