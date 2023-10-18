import { Link, NavLink } from "react-router-dom";
import {CiMenuBurger} from 'react-icons/ci'
import {CgClose} from 'react-icons/cg'
import "./navbar.css";
import { useState } from "react";

export default function Navbar() {
    const [isNavOpen, setNavOpen] = useState(false);


  return (
    <nav>
      <div className="container navContainer">
        <Link className="logo" to="/">
          <h3>Fitness Page</h3>
        </Link>
        <ul className={`navLinks ${isNavOpen ? 'navbarShowed' : 'navbarHidden'}`}>
          <li className="navItems">
            <NavLink to="/" className={({isActive})=> isActive ? "navActive":""}>Home</NavLink>
          </li>
          <li className="navItems">
            <NavLink to="/programs" className={({isActive})=> isActive ? "navActive":""}>Programs</NavLink>
          </li>
          <li className="navItems">
            <NavLink to="/trainers" className={({isActive})=> isActive ? "navActive":""}>Trainers</NavLink>
          </li>
          <li className="navItems">
            <NavLink to="/about" className={({isActive})=> isActive ? "navActive":""}>About</NavLink>
          </li>
          <li className="navItems">
            <NavLink to="/contact" className={({isActive})=> isActive ? "navActive":""}>Contact</NavLink>
          </li>
        </ul>
        <button className="navMenuBtn" onClick={()=> setNavOpen(!isNavOpen)}>
            {
                !isNavOpen ? <CiMenuBurger/> : <CgClose />
            }
        </button>
      </div>
    </nav>
  );
}
