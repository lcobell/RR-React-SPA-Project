import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import About from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";
import MyDogs from "./components/MyDogs";
import NavBar from "./components/NavBar";

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
          <h1>Welcome</h1>

          <NavBar />
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
            <Route path="/aboutme" element={<About />} />
            <Route
              path="/projects"
              element={<Projects projects={projects} />}
            />
            <Route path="MyDogs" element={<MyDogs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
