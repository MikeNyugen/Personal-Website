import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="copyright footer">
        <span>&#169; 2022 Mike Nguyen </span>
      </div>
      <div className="note">
        <span>
          Built with{" "}
          <a href="https://reactjs.org/" target="_blank">
            <strong>React.js</strong>
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
