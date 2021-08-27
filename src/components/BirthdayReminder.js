import React, { useState } from "react";
import "../styles/default.css";
import "../styles/BirthdayReminder.css";
import data from "../data.js";

function BirthdaysList() {
  const [personData, setPersonData] = useState(data);
  const [total, setTotal] = useState(personData.length);

  return (
    <main>
      <section id="birthdays">
        <h3>{total} birthdays today</h3>
        {personData.map((person) => {
          return <Birthday key={person.id} {...person} />;
        })}
        <button
          onClick={() => {
            setPersonData([]);
            setTotal(0);
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

function Birthday({ name, age, image }) {
  return (
    <article id="birthday">
      <h5 class="name">{name}</h5>
      <p class="age">{age} years</p>
      <img src={image} alt="" width="80" height="80" />
    </article>
  );
}

export default BirthdaysList;
