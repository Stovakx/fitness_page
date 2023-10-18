import "./trainersPage.css";
import fetchData from "../../utils/axios";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import BackgroundImg from "../../assets/gallery8.jpg";
import { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa6";

export default function TrainersPage() {
  const [trainers, setTrainers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData("trainers")
      .then((trainersData) => {
        setTrainers(trainersData);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Problém při načtení fotek");
      });
  }, []);

  return (
    <>
      <Header img={BackgroundImg} title={"Our trainers"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Header>
      <section>
        <div className="container trainersContainer">
          {trainers.length > 0 ? (
            trainers.map(({ id, name, img, job, email }) => (
              <Card key={id} className={"trainersCard"}>
                <div className="trainerImgDiv">
                  <img src={img} className="trainerImg" alt="trainer" />
                </div>
                <h3>{name}</h3>
                <p>{job}</p>
                <div className="emailDiv">
                  <a href={`mailto:${email}`}>{email}</a>
                  <FaEnvelope />
                </div>
              </Card>
            ))
          ) : (
            <p>{errorMessage || "Loading..."}</p>
          )}
        </div>
      </section>
    </>
  );
}
