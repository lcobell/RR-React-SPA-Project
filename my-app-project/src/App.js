import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import About from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  const projects = [
    "JavaScript Web Browser Game",
    "React-a-Mole",
    "Redux Grocery List",
  ];
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Welcome to Logan CoBell's Portfolio Page</h1>
          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Projects">My Projects</Link>
              </li>
              <li>
                <Link to="/AboutMe">About Me</Link>
              </li>
              <li>
                <Link to="/MyDogs">My Dogs</Link>
              </li>
            </ul>
          </div>
        </header>
        <div>
          <img
            src="readytorun.jpeg"
            alt="Logan and the dogs outside and ready to run!"
          />
        </div>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/projects"
              element={<Projects projects={projects} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
