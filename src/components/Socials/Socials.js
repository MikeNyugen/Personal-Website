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
              fontSize: "21px",
              backgroundColor: "white",
              "& .MuiTooltip-arrow": {
                color: "white",
                width: "0px",
              },
              color: "black",
              fontWeight: "bold",
              fontFamily: "roboto",
            },
          },
        }}
      >
        <a href="https://github.com/MikeNyugen" target="_blank">
          <img
            className="icon1"
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
              fontSize: "21px",
              backgroundColor: "white",
              "& .MuiTooltip-arrow": {
                color: "white",
                width: "0px",
              },
              color: "black",
              fontWeight: "bold",
              fontFamily: "roboto",
            },
          },
        }}
      >
        <a href="https://www.linkedin.com/in/mike-n-644b901b3/" target="_blank">
          <img
            className="icon2"
            src={require("./linkedin.png")}
            alt="LinkedIn icon"
          />
        </a>
      </Tooltip>

      <Tooltip
        title="Send me an email: mikenguyen017@gmail.com"
        placement="bottom"
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 150 }}
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "21px",
              backgroundColor: "white",
              "& .MuiTooltip-arrow": {
                color: "white",
                width: "0px",
              },
              color: "black",
              fontWeight: "bold",
              fontFamily: "roboto",
              textAlign: "center"
              
            },
          },
        }}
      >
        <a href="https://www.linkedin.com/in/mike-n-644b901b3/" target="_blank">
          <img className="icon3" src={require("./mail.png")} alt="mail icon" />
        </a>
      </Tooltip>


      <Tooltip
        title="Instagram profile"
        placement="bottom"
        TransitionComponent={Zoom}
        TransitionProps={{ timeout: 150 }}
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              fontSize: "21px",
              backgroundColor: "white",
              "& .MuiTooltip-arrow": {
                color: "white",
                width: "0px",
              },
              color: "black",
              fontWeight: "bold",
              fontFamily: "roboto",
            },
          },
        }}
      >
        <a href="#projects">
          <img className="icon4" src={require("./instagram.png")} alt="instagram icon" />
        </a>
      </Tooltip>
    </div>
  );
};

export default Socials;
