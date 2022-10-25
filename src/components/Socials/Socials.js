import "./Socials.css";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const Socials = () => {
  return (
    <div className="social-div">
      <Tooltip
        title="GitHub repository"
        placement="bottom"
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 150 }}
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "25px",
              backgroundColor: "white",
              "& .MuiTooltip-arrow": {
                color: "white",
                width: "0px",
              },
              color: "black",
              fontWeight: "bold"
            },
          },
        }}
      >
        <a href="https://github.com/MikeNyugen" target="_blank">
          <img
            className="icon"
            src={require("./github.png")}
            alt="GitHub icon"
          />
        </a>
      </Tooltip>

      <Tooltip
        title="Linkedin Profile"
        placement="bottom"
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 150 }}
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "25px",
              backgroundColor: "white",
              "& .MuiTooltip-arrow": {
                color: "white",
                width: "0px",
              },
              color: "black",
              fontWeight: "bold"
            },
          },
        }}
      >
        <a href="https://www.linkedin.com/in/mike-n-644b901b3/" target="_blank">
          <img
            className="icon"
            src={require("./linkedin.png")}
            alt="LinkedIn icon"
          />
        </a>
      </Tooltip>

      <Tooltip
        title="Send me an email"
        placement="bottom"
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 150 }}
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "25px",
              backgroundColor: "white",
              "& .MuiTooltip-arrow": {
                color: "white",
                width: "0px",
              },
              color: "black",
              fontWeight: "bold"
            },
          },
        }}
      >
        <a href="https://www.linkedin.com/in/mike-n-644b901b3/" target="_blank">
          <img className="icon" src={require("./mail.png")} alt="mail icon" />
        </a>
      </Tooltip>
    </div>
  );
};

export default Socials;