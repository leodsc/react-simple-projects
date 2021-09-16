import React, { useState, useRef, useContext } from "react";
import { List, navData } from "./index";
import "styles/stripe-menus/normalNav.css";

const Content = React.createContext();

export function Navigation() {
  const [content, setContent] = useState(0);
  const list = useRef(null);

  const hideContent = () => {
    list.current.style.display = "none";
  };

  const showContent = (id, event) => {
    setContent(id);
    list.current.style.display = "grid";
    const button = document.elementFromPoint(event.clientX, event.clientY);
    const { left, width } = button.getBoundingClientRect();
    list.current.style.left = `${left - width / 3}px`;
  };

  return (
    <Content.Provider value={{ hideContent, showContent }}>
      <nav id="larger-width">
        <div className="dropdown">
          <DropdownBtn name="products" id={0} />
          <DropdownBtn name="developers" id={1} />
          <DropdownBtn name="company" id={2} />
          <List
            forwardedRef={list}
            dropdown={"dropdown-content"}
            name={navData[content].name}
            items={navData[content].items}
            Icon={navData[content].icon}
          />
        </div>
      </nav>
      <button id="sign-in">Sign in</button>
    </Content.Provider>
  );
}

const DropdownBtn = ({ id, name }) => {
  const { hideContent, showContent } = useContext(Content);

  return (
    <button
      className="dropdown-btn"
      onMouseOver={(event) => {
        showContent(id, event);
      }}
      onMouseLeave={() => {
        hideContent();
      }}
    >
      {name}
    </button>
  );
};
