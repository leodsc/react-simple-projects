import React, { useEffect, useState } from "react";
import Values from "values.js";
import "../styles/ColorPicker.css";

export default function ColorPicker() {
  const [pallete, setPallete] = useState([]);
  const [color, setColor] = useState("");
  const [clipboardHex, setClipboardHex] = useState("");

  const generateRandomID = () => {
    let id = "";
    for (let i = 0; i < 20; i++) {
      id += String(Math.floor(Math.random() * 20));
    }
    return id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPallete([]);
    const valuesColor = new Values(color);
    for (let perc = 100; perc >= 0; perc -= 10) {
      const hex = valuesColor.tint(perc).hexString();
      const id = generateRandomID();
      setPallete((pallete) => {
        return [...pallete, { hex, perc, id }];
      });
    }
    for (let perc = 10; perc <= 100; perc += 10) {
      const hex = valuesColor.shade(perc).hexString();
      const id = generateRandomID();
      setPallete((pallete) => {
        return [...pallete, { hex, perc, id }];
      });
    }
    console.log(valuesColor.shade(90));
    // for (let i = 0.0; i <= 1.0; i += 0.1) {
    //   const colorHex = color.slice(1, color.length);
    //   const [r, g, b] = [
    //     Number("0x" + colorHex.slice(0, 2)),
    //     Number("0x" + colorHex.slice(2, 4)),
    //     Number("0x" + colorHex.slice(4, 6)),
    //   ];
    //   setPallete((pallete) => {
    //     return [...pallete, `rgba(${r}, ${g}, ${b}, ${i})`];
    //   });
    // }
  };

  return (
    <main>
      <article>
        <section id="color">
          <h1>color generator</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={"#f15025"}
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </section>
        <section id="color-gradient">
          {pallete.map((obj, index) => {
            const text = index > 10 ? "white" : "#162f47";
            return (
              <div
                id={obj.id}
                className="color"
                style={{
                  backgroundColor: obj.hex,
                  color: text,
                }}
                onClick={async (e) => {
                  await navigator.clipboard.writeText(obj.hex);
                  setClipboardHex(obj.id);
                }}
              >
                <p>{obj.perc}%</p>
                <p>{obj.hex}</p>
                {clipboardHex == obj.id && (
                  <p class="copied">copied to clipboard</p>
                )}
              </div>
            );
          })}
        </section>
      </article>
    </main>
  );
}
