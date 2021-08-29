import React, { useState } from "react";
import questions from "../data/accordion.js";
import "../styles/Accordion.css";

export default function Accordion() {
  return (
    <section id="questions">
      <h3>questions and answers about login</h3>
      <ul>
        {questions.map((question) => {
          return <Question {...question} />;
        })}
      </ul>
    </section>
  );
}

function Question({ id, title, info }) {
  const [showText, setShowText] = useState(false);
  const [signal, setSignal] = useState("+");

  return (
    <li key={id} class="question">
      <h5>{title}</h5>
      <button
        onClick={() => {
          !showText ? setSignal("-") : setSignal("+");
          setShowText(!showText);
        }}
      >
        {signal}
      </button>
      <p>{showText && info}</p>
    </li>
  );
}
