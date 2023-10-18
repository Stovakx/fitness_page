import "./faqs.css";
import { useState, useEffect } from "react";
import Faq from "./Faq";
import fetchData from "../../utils/axios";
import HeadingText from "../HeadingText/HeadingText";
import { FaQuestion } from "react-icons/fa6";
export default function Faqs() {
  const [faqs, setFaqs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData("faqs")
      .then((faqsData) => {
        setFaqs(faqsData);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Problém při načtení dat");
      });
  }, []);
  return (
    <section className="faqs">
      <div className="container faqsContainer">
        <HeadingText
          icon={<FaQuestion />}
          title={"faqs"}
          className={"faqsHeading"}
        />
        <div className="faqsWrapper">
          {faqs.length > 0 ? (
            faqs.map(({ id, que, ans }) => (
              <Faq key={id} que={que} ans={ans} className={"faqsCard"} />
            ))
          ) : (
            <p>{errorMessage || "Loading..."}</p>
          )}
        </div>
      </div>
    </section>
  );
}
