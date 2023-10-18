import "./values.css";
import fetchData from "../../utils/axios";
import { useEffect, useState } from "react";
import ValueHeroImage from "../../assets/value.png";
import HeadingText from "../HeadingText/HeadingText";
import { FaLayerGroup } from "react-icons/fa6";
import Card from "../Card/Card";

export default function Values() {
  const [values, setValues] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData("values")
      .then((valuesData) => {
        setValues(valuesData);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Problém při načtení dat");
      });
  }, []);

  return (
    <section className="values">
      <div className="container valuesContainer">
        <div className="valuesLeft">
          <img src={ValueHeroImage} alt="value hero image" />
        </div>
        <div className="valuesRight">
          <HeadingText
            icon={<FaLayerGroup />}
            title={"Our Values"}
            className={"ourValues"}
          />
          <div className="valuesWrapper">
            {values.length > 0 ? (
              values.map(({ id, img, title, des }) => (
                <Card key={id} className={"valuesCard"}>
                  <img src={img} alt="values images" />
                  <h4>{title}</h4>
                  <small>{des}</small>
                </Card>
              ))
            ) : (
              <p>{errorMessage || "Loading..."}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
