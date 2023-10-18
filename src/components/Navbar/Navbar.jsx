import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import "./navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <nav>
      <div className="container navContainer">
        <Link className="logo" to="/">
          <h3>Fitness Page</h3>
        </Link>
        <ul
          className={`navLinks ${isNavOpen ? "navbarShowed" : "navbarHidden"}`}
        >
          <li className="navItems">
            <NavLink
              to="/"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="navItems">
            <NavLink
              to="/programs"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              Programs
            </NavLink>
          </li>
          <li className="navItems">
            <NavLink
              to="/gallery"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              Gallery
            </NavLink>
          </li>
          <li className="navItems">
            <NavLink
              to="/trainers"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              Trainers
            </NavLink>
          </li>
          <li className="navItems">
            <NavLink
              to="/about"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="navItems">
            <NavLink
              to="/contact"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "navActive" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="navMenuBtn" onClick={() => setNavOpen(!isNavOpen)}>
          {!isNavOpen ? <CiMenuBurger /> : <CgClose />}
        </button>
      </div>
    </nav>
  );
}
