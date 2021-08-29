import React, { useEffect, useState } from "react";
import "../styles/Tours.css";

const Tours = () => {
  const url = "https://course-api.com/react-tours-project";
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalTours, setTotalTours] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) return resp.json();
        else throw new Error(resp.status);
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setTotalTours(data.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      {isLoading ? (
        <h1 style={{ fontSize: "50px" }}>Loading...</h1>
      ) : totalTours != 0 ? (
        <h1>Our Tours</h1>
      ) : (
        <h1>No Tours Left</h1>
      )}
      <section>
        <div class="line"></div>
        <ul>
          {data.map((tour) => {
            return (
              <Tour
                key={tour.id}
                toursInfo={{
                  totalTours: totalTours,
                  setTotalTours: setTotalTours,
                }}
                {...tour}
              />
            );
          })}
        </ul>
      </section>
      {totalTours == 0 && (
        <button id="refresh" onClick={() => document.location.reload()}>
          Refresh
        </button>
      )}
    </main>
  );
};

const Tour = ({ image, info, name, price, toursInfo }) => {
  const [showText, setShowText] = useState(false);
  const [text, setText] = useState("read more");
  const [showTour, setShowTour] = useState(true);
  const { totalTours, setTotalTours } = toursInfo;

  return (
    <>
      {showTour && (
        <li>
          <img src={image} alt="" />
          <h5 class="preload">{name}</h5>
          <p class="preload">${price}</p>
          <span class="preload">
            {showText ? info : info.slice(0, 200)}...{" "}
            <button
              class="read-more"
              onClick={() => {
                setShowText(!showText);
                text === "read more"
                  ? setText("show less")
                  : setText("read more");
              }}
            >
              {text}
            </button>
          </span>
          <button
            onClick={() => {
              setShowTour(false);
              setTotalTours(totalTours - 1);
            }}
            class="toggle-tour"
          >
            not interested
          </button>
        </li>
      )}
    </>
  );
};

export default Tours;
