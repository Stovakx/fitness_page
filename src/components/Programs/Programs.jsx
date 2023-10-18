import { useEffect, useState } from "react";
import "./programs.css";
import { Link } from "react-router-dom";
import HeadingText from "../HeadingText/HeadingText";
import Card from "../Card/Card";
import fetchData from "../../utils/axios";
import { FaCrown } from "react-icons/fa6";

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData("programs")
      .then((programsData) => {
        setPrograms(programsData);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Problém při načtení dat");
      });
  }, []);

  return (
    <section className="programs">
      <div className="container containerPrograms">
        <HeadingText
          icon={<FaCrown />}
          title={"Our Programs"}
          className={"ourPrograms"}
        />
        <div className="programsWrapper">
          {programs.length > 0 ? (
            programs.map(({ id, img, title, des, path }) => (
              <Card key={id} className={"programsCard"}>
                <img src={img} alt={title} />
                <h4>{title}</h4>
                <small>{des}</small>
                <Link to={path} className="btn btn-sm btn-em">Learn more..</Link>
              </Card>
            ))
          ) : (
            <p>{errorMessage || "Loading..."}</p>
          )}
        </div>
      </div>
    </section>
  );
}
