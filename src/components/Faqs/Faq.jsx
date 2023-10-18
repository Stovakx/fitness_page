import { useState } from "react";
import "./faqs.css";
import { FaMinus, FaPlus } from "react-icons/fa6";


export default function Faq({ que, ans }) {
  const [isAnswerShowing, setIsAnswerShowin] = useState(false);

  const faqHandler = ()=>{
    setIsAnswerShowin(block => !block)
  }

  return (
    <article className="faq" onClick={faqHandler}>
      <div>
        <h4>{que}</h4>
        <span className="faqIcon">
          {
            !isAnswerShowing ? <FaPlus /> : <FaMinus/>
          }
        </span>
      </div>
      {isAnswerShowing && <p>{ans}</p>}
    </article>
  );
}
