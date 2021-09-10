import React, { useRef, useState } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Navbar.css";

export default function Navbar() {
  const header = useRef(null);
  const [showNav, setShowNav] = useState(false);

  return (
    <header ref={header}>
      <h2>
        coding <span>addict</span>
      </h2>
      <button
        id="menu"
        onClick={() => {
          header.current.style.height = showNav ? "70px" : "270px";
          setShowNav(!showNav);
        }}
      >
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </button>
      <nav>
        <ul>
          <li>
            <a href="https://www.twitter.com">home</a>
          </li>
          <li>
            <a href="https://www.twitter.com">about</a>
          </li>
          <li>
            <a href="https://www.twitter.com">projects</a>
          </li>
          <li>
            <a href="https://www.twitter.com">contact</a>
          </li>
          <li>
            <a href="https://www.twitter.com">profile</a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com"></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
