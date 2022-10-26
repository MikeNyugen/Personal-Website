import "./LogoStack.css";
import Stack from "@mui/material/Stack";

const LogoStack = ({ logoList, codeAvailable }) => {
  return (
    <div className="logo-stack">
      <Stack direction="row" spacing={3}>
        {logoList.map((image) => (
          <img className="tech-logo" src={image.src} alt={image.alt} />
        ))}
      </Stack>
    </div>
  );
};

export default LogoStack;
