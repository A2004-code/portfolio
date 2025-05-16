import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-content">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
        <Link 
          to="/contact" 
          className="btn btn-primary"
        >
          Hire Me
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar; 