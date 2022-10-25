import React from "react"
import "./App.css"
import Introduction from "./components/Introduction/Introduction"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Introduction />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
