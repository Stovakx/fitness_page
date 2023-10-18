import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container footerContainer">
        <div className="footerContent">
          <Link to={"/"}>
            <h2 className="footerLogo">Fitness app</h2>
          </Link>
          <p>
            lorem impsum dolor sit ammet consectetur adipisicing elit. Corporis,
            elus iure! Illum cumque facilis ad odit?
          </p>
          <h3>Social Links</h3>
          <ul className="socialLinks">
            <li>
              <a href="https://www.facebook.com/Stovakx">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/stovakx/">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/robin-palat%C3%A1%C5%A1-8b28ba133/">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/Stovakx">Github</a>
            </li>
          </ul>
        </div>
        <div className="footerLinks">
          <h3>Permalinks</h3>
          <ul >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/trainers">Trainers</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="insightsLinks">
          <h3>Insights</h3>
          <ul >
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>Supports</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Case Studies</a>
            </li>
            <li>
              <a>Others</a>
            </li>
          </ul>
        </div>
      </div>
      <p>Inspired by <a href="https://www.youtube.com/@Candycode.">Candycode</a>. </p>
    </footer>
  );
}
