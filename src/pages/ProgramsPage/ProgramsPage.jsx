import "./programsPage.css";
import fetchData from "../../utils/axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import BgImage from "../../assets/gallery5.jpg";

export default function ProgramsPage() {
  const [plans, setPlans] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData("plans")
      .then((plansData) => {
        setPlans(plansData);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Problém při načtení fotek");
      });
  }, []);

  return (
    <>
      <Header img={BgImage} title={"Excercise plans"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Header>
      <section>
        <div className="container plansContainer">
          {plans.length > 0 ? (
            plans.map(({ id, name, des, price, services }) => (
              <Card key={id} className={"plansCard"}>
                <div className="planCardBody">
                  <h3>{name}</h3>
                  <p>{des}</p>
                  <h1>${price}<span>/mo</span></h1>
                </div>
                <div className="planCardbottom">
                  <h3>Services</h3>
                  {services.map(({ feature, available }, index) => (
                    <p key={index} className={!available ? "disable" : ""}>
                      {feature}
                    </p>
                  ))}
                </div>
                <a className="btn btn-em" href="">Buy the plan</a>
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
