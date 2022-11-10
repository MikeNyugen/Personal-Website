import "./SlideShow.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

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
      <PhotoProvider>
        <Fade
          duration={10500}
          transitionDuration={300}
          indicators={true}
          {...properties}
        >
          {imageList.map((fadeImage, index) => (
            <PhotoView
              key={index}
              src={require(`../../Images/images/${fadeImage.url}`)}
            >
              <div key={index}>
                <img
                  className="project-image hvr-shrink"
                  width={200}
                  src={require(`../../Images/images/${fadeImage.url}`)}
                  alt="image"
                />
                <br></br>
                <span className="caption">{fadeImage.caption}</span>
              </div>
            </PhotoView>
          ))}
        </Fade>
      </PhotoProvider>
    </div>
  );
};

export default SlideShow;
