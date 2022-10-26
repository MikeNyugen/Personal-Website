import "./LogoStack.css";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const LogoStack = ({ logoList, codeAvailable }) => {
  return (
    <div className="logo-stack">
      <Stack direction="row" spacing={3}>
        {logoList.map((image) => (
          <img className="tech-logo" src={image.src} alt={image.alt} />
        ))}
        {codeAvailable ? (
          <Tooltip
            title="Source code"
            placement="top"
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 150 }}
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  fontSize: "20px",
                  backgroundColor: "white",
                  "& .MuiTooltip-arrow": {
                    color: "white",
                    width: "0px",
                  },
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "10px",
                },
              },
            }}
          >
            <a
              className="github"
              href="https://github.com/MikeNyugen/Ethical-Review-Application"
              target="_blank"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"></img>
            </a>
          </Tooltip>
        ) : (
          <></>
        )}
      </Stack>
    </div>
  );
};

export default LogoStack;
