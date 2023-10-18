import { Link } from "react-router-dom";
import "./notFound.css";

export default function NotFound() {
  return (
    <section>
      <div className="notFoundContainer">
        <h1> Page not found</h1>
        <Link to={"/"} className="btn">Go back to Home page.</Link>
      </div>
    </section>
  )
}
