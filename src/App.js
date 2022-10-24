import React from "react"
import "./App.css"
import Introduction from "./components/Introduction/Introduction"
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <div className="App">
      <Introduction />
      <Projects />
    </div>
  );
}

export default App;