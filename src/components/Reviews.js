import React, { useState } from "react";
import "../styles/Reviews.css";
import data from "../data/reviews";

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  return (
    <main>
      <section id="reviews">
        <h2>Our Reviews</h2>
        <div id="line"></div>
        <article class="review">
          <Review {...data[currentReview]} />

          <div className="button-ctn">
            <button
              class="arrow"
              onClick={() => {
                currentReview == 0
                  ? setCurrentReview(data.length - 1)
                  : setCurrentReview(currentReview - 1);
              }}
            >
              &#706;
            </button>
            <button
              class="arrow"
              onClick={() => {
                currentReview == data.length - 1
                  ? setCurrentReview(0)
                  : setCurrentReview(currentReview + 1);
              }}
            >
              &#707;
            </button>
          </div>
          <button
            id="random-review"
            onClick={() =>
              setCurrentReview(Math.floor(Math.random() * data.length))
            }
          >
            surprise me
          </button>
        </article>
      </section>
    </main>
  );
}

function Review({ name, job, image, text }) {
  return (
    <>
      <div
        class="picture"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div id="quote"></div>
      </div>
      <h5 class="name">{name}</h5>
      <h6 class="role">{job}</h6>
      <p class="description">{text}</p>
    </>
  );
}
