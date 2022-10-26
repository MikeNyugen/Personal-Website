import React from "react";
import "./App.css";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Introduction />
      <Projects />
      <hr></hr>
      <a href="#top">
        <div className="top">
          <p className="text">Back to top</p>
        </div>
      </a>
      <Footer />
    </div>
  );
}

export default App;
