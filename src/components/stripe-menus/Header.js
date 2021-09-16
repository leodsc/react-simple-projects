import React, { useState, useEffect, useContext } from "react";
import { NavContext } from "./index";
import { Menu } from "@material-ui/icons";
import { Navigation } from "./Navigation";
import "styles/stripe-menus/mobileNav.css";

export function Header() {
  const { setShowNav } = useContext(NavContext);
  const [smallWidth, setSmallWidth] = useState(null);

  const checkWindowSize = () => {
    if (window.innerWidth >= 809) setSmallWidth(false);
    else setSmallWidth(true);
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
  }, []);

  return (
    <header>
      <h3>stripe</h3>
      {smallWidth ? (
        <Menu id="menu" onClick={() => setShowNav(true)} />
      ) : (
        <Navigation />
      )}
    </header>
  );
}
