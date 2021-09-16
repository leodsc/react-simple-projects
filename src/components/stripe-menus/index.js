import React, { useState, useRef } from "react";
import { Header } from "./Header";
import { Close, CreditCardRounded, Book, Work } from "@material-ui/icons";
import "styles/stripe-menus/index.css";

export const navData = [
  {
    name: "products",
    items: ["payment", "terminal", "connect"],
    icon: CreditCardRounded,
  },
  {
    name: "developers",
    items: ["plugins", "libraries", "help", "billing"],
    icon: Book,
  },
  { name: "company", items: ["about", "customers"], icon: Work },
];

export const NavContext = React.createContext();

export default function Main() {
  const [showNav, setShowNav] = useState(false);
  const nav = useRef(null);
  const modal = useRef(null);

  return (
    <NavContext.Provider value={{ setShowNav }}>
      {showNav && <div ref={modal} id="modal"></div>}
      <div id="background"></div>
      <Header />
      <main>
        {showNav && (
          <nav ref={nav} id="mobile-nav">
            <Close
              id="close-nav"
              fontSize={"large"}
              onClick={() => {
                nav.current.style.animationName = "hide";
                modal.current.style.animationName = "hide";
                setTimeout(() => {
                  setShowNav(false);
                }, 500);
              }}
            />
            {navData.map((data) => {
              return (
                <List name={data.name} items={data.items} Icon={data.icon} />
              );
            })}
          </nav>
        )}
        <section id="description">
          <h4>Payments infrastructure for the internet</h4>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button id="start">Start now</button>
        </section>
      </main>
    </NavContext.Provider>
  );
}

export const List = ({ forwardedRef, dropdown, name, items, Icon }) => {
  let heading = <h3>{name}</h3>;
  if (window.innerWidth >= 809) {
    heading = <h3 style={{ gridColumn: `1/${items.length + 1}` }}>{name}</h3>;
  }

  return (
    <ul ref={forwardedRef} className={dropdown}>
      {heading}
      {items.map((item) => {
        return (
          <div className="list-ctn">
            <Icon />
            <li>{item}</li>
          </div>
        );
      })}
    </ul>
  );
};
