import React, { useEffect, useState } from "react";
import slides from "../data/slider";
import "../styles/Slider.css";

export default function Project() {
  const [currentPerson, setCurrentPerson] = useState(0);
  const [nextSlideDirection, setNextSlideDirection] = useState(null);
  const [autoClick, setAutoClick] = useState(null);

  const timer = () => {
    const arrowRight = document.querySelector("button#right");
    arrowRight.click();
  };

  useEffect(() => {
    setAutoClick(setInterval(timer, 3000));
  }, []);

  const changePerson = (e) => {
    clearInterval(autoClick);

    let nextSlide;
    let currentSlideMovement;
    let nextSlideMovement;

    if (e.target.id == "left") {
      nextSlideMovement = "show-from-left";
      currentSlideMovement = "move-to-right";
      nextSlide = currentPerson == 0 ? slides.length - 1 : currentPerson - 1;
    } else {
      nextSlideMovement = "show-from-right";
      currentSlideMovement = "move-to-left";
      nextSlide = currentPerson == slides.length - 1 ? 0 : currentPerson + 1;
    }

    const slide = document.getElementById("slide");
    slide.style.opacity = "0.5";
    slide.className = `animation ${currentSlideMovement}`;

    setTimeout(() => {
      setNextSlideDirection(nextSlideMovement);
      setCurrentPerson(nextSlide);
      setAutoClick(setInterval(timer, 3000));
    }, 250);
  };

  return (
    <main>
      <section>
        <h1>
          <span style={{ color: "#ba5d2c" }}>/</span> Reviews
        </h1>
        <div id="slider">
          <button id="left" onClick={changePerson}>
            {"<"}
          </button>
          {slides.map((slide, index = -1) => {
            index++;
            return (
              slides[currentPerson].id == slide.id && (
                <>
                  <Slide
                    animation={nextSlideDirection}
                    key={slide.id}
                    {...slide}
                  />
                </>
              )
            );
          })}
          <button id="right" onClick={changePerson}>
            {">"}
          </button>
        </div>
      </section>
    </main>
  );
}

function Slide({ image, name, title, quote, animation }) {
  return (
    <div id="slide" className={`animation ${animation}`}>
      <img class="pic " src={image} alt={name} />
      <div class="info-ctn ">
        <h5>{name}</h5>
        <h6>{title}</h6>
      </div>
      <p>{quote}</p>
      {/* <svg width="150" height="150">
        <path d="M300 0 L75 200 Z"></path>
      </svg> */}
    </div>
  );
}
