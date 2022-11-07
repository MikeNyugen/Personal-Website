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
    <div className="project-image-div" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
      <Fade
        duration={10500}
        transitionDuration={300}
        indicators={true}
        {...properties}
      >
        {imageList.map((fadeImage, index) => (
          <div key={index}>
            <img
              className="project-image"
              width={200}
              src={require(`../../Images/images/${fadeImage.url}`)}
              alt="image"
            />
            <br></br>
            <span className="caption">{fadeImage.caption}</span>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SlideShow;
