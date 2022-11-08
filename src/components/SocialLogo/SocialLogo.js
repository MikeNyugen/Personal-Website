import "./SocialLogo.css";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const SocialLogo = ({ title, imageURL, href, alt, cssClass }) => {
  return (
    <Tooltip
      title={title}
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
            borderRadius: "10px",
            textAlign: "center",
          },
        },
      }}
    >
      <a href={href} target="_blank">
        <img className={cssClass} src={imageURL} alt={alt} />
      </a>
    </Tooltip>
  );
};

export default SocialLogo;
