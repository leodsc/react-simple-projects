import React, { useState } from "react";
import "../styles/LoremIpsum.css";
import loremText from "../data/lorem.js";

export default function LoremIpsum() {
  const [paragraphNum, setParagraphNum] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let totalParagraph = paragraphNum;
    if (paragraphNum > 8) totalParagraph = 8;
    setParagraphs([]);
    for (let i = 0; i < totalParagraph; i++) {
      const paragraph = loremText[i];
      setParagraphs((paragraphs) => {
        return [...paragraphs, paragraph];
      });
    }
  };

  return (
    <main>
      <article>
        <h1>tired of boring lorem ipsum?</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="paragraphs">Paragraphs: </label>
          <input
            id="paragraphs"
            name="paragraphs"
            type="number"
            value={paragraphNum}
            onChange={(e) => setParagraphNum(e.target.value)}
          />
          <button type="submit">generate</button>
        </form>
        {paragraphs.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </article>
    </main>
  );
}
