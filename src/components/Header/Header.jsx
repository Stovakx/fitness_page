import { Link } from "react-router-dom";
import HeroImage from "../../assets/main_header.png";
import "./header.css";

export default function Header() {
  return (
    <header className="mainHeader">
      <div className="container mainHeaderContainer">
        <div className="mainHeaderLeft">
          <h4>#90DaysOfWorkout</h4>
          <h1>The Great fitness World To Get Better Life</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/programs" className=" btn btn-em">Get Started</Link>
        </div>
        <div className="mainHeaderRight">
            <div className="mainHeaderCircle"></div>
            <img src={HeroImage} alt="hero image"/>
        </div>

      </div>
    </header>
  );
}
