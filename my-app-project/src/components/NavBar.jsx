import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
export default function NavBar() {
  return (
    <div className="navBar">
      <Navbar.Brand>Logan's Links</Navbar.Brand>
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
  );
}
