import React from "react";
import { useState } from "react";
import questionAnswer from "../../data/questionAnswer";

export default function Faq() {
  function QuestionAndAnswer({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <ul className={`faq__content ${isOpen ? "open" : "close"}`}>
        <li onClick={() => setIsOpen((prev) => !prev)}>
          <p>{question}</p>
          <i className="fa-solid fa-chevron-down"></i>
        </li>
        <li>
          <p>{answer}</p>
        </li>
      </ul>
    );
  }
  return (
    <section className="section faq" id="faq">
      <article className="faq__article">
        {questionAnswer.map(({ question, answer }, i) => (
          <QuestionAndAnswer question={question} answer={answer} key={i} />
        ))}
      </article>
    </section>
  );
}
