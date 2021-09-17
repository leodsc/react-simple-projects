import React, { useState, useContext } from "react";
import data from "./data";
import "styles/use-reducer/index.css";
import {
  LocalMall,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@material-ui/icons";

const Counter = React.createContext();

export default function Main() {
  const [cartCounter, setCartCounter] = useState(4);
  const [total, setTotal] = useState(2199.96);

  return (
    <Counter.Provider value={{ cartCounter, setCartCounter, setTotal }}>
      <Header />
      <main>
        <h3 id="bag-title">your bag</h3>
        {total > 0 && (
          <>
            <section id="bag">
              {data.map((info, index) => {
                return <Item key={index} info={info} />;
              })}
            </section>
            <section id="total">
              <p>Total</p>
              <p>${total}</p>
            </section>
            <button
              id="clear-cart"
              onClick={() => {
                setCartCounter(0);
                setTotal(0);
              }}
            >
              clear cart
            </button>
          </>
        )}
        {total == 0 && <h3 id="no-items">is currently empty</h3>}
      </main>
    </Counter.Provider>
  );
}

function Item({ info, key }) {
  const { setCartCounter, setTotal } = useContext(Counter);
  const [counter, setCounter] = useState(1);

  const update = (operation) => {
    setCartCounter((oldValue) => {
      return operation == "increase" ? oldValue + 1 : oldValue - 1;
    });
    setCounter((oldValue) => {
      return operation == "increase" ? oldValue + 1 : oldValue - 1;
    });
    setTotal((oldValue) => {
      return operation == "increase"
        ? (Number(oldValue) + info.price).toFixed(2)
        : (Number(oldValue) - info.price).toFixed(2);
    });
  };

  return (
    <>
      {counter > 0 && (
        <article className="item">
          <img src={info.img} alt="" width="80" height="80" />
          <div className="info-ctn">
            <h5 className="title">{info.title}</h5>
            <h5 className="price">${info.price}</h5>
            <button
              onClick={() => {
                setCounter(0);
              }}
            >
              remove
            </button>
          </div>
          <div className="quantity-ctn">
            <button onClick={() => update("increase")}>
              <KeyboardArrowUp />
            </button>
            <p>{counter}</p>
            <button onClick={() => update("decrease")}>
              <KeyboardArrowDown />
            </button>
          </div>
        </article>
      )}
    </>
  );
}

function Header() {
  const { cartCounter } = useContext(Counter);

  return (
    <header>
      <h3>UseReducer</h3>
      <div className="bag-ctn">
        <p>{cartCounter}</p>
        <LocalMall fontSize="large" id="icon" />
      </div>
    </header>
  );
}
