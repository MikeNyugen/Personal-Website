import "./SlideShow.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const properties = {
  prevArrow: (
    <button className="slide-button-left">
      <ArrowBackIosIcon />
    </button>
  ),
  nextArrow: (
    <button className="slide-button-right">
      <ArrowForwardIosIcon />
    </button>
  ),
};

const SlideShow = ({ imageList }) => {
  return (
    <div className="project-image-div">
      <Fade
        duration={5000}
        transitionDuration={500}
        indicators={true}
        {...properties}
      >
        {imageList.map((fadeImage, index) => (
          <div key={index}>
            <img
              className="project-image"
              width="700px"
              height="390px"
              src={fadeImage.url}
              alt="image"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SlideShow;
