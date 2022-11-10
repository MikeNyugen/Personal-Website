import SocialLogo from "../SocialLogo/SocialLogo";

const SocialStack = () => {
  return (
    <div
      className="social-div"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <SocialLogo
        title="Github Repository"
        imageURL="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        href="https://github.com/MikeNyugen"
        alt="Github logo"
        cssClass="icon1"
      />

      <SocialLogo
        title="Linkedin Profile"
        imageURL="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
        href="https://www.linkedin.com/in/mike-n-644b901b3/"
        alt="Linkedin logo"
        cssClass="icon2"
      />

      <SocialLogo
        title="Send me an email: mikenguyen017@gmail.com"
        imageURL="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg"
        href="mailto:mikenguyen017@gmail.com"
        alt="Mail icon"
        cssClass="icon3"
      />

      <SocialLogo
        title="Twitter Profile"
        imageURL="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
        href="https://twitter.com/mike_nyugen"
        alt="Twitter logo"
        cssClass="icon4"
      />
    </div>
  );
};

export default SocialStack;
