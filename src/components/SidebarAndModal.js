import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Home,
  CalendarToday,
  Group,
  Description,
  Folder,
  Facebook,
  GitHub,
  LinkedIn,
  Twitter,
  YouTube,
  Close,
} from "@material-ui/icons";
import "../styles/SlidebarAndModal/slidebar.css";
import "../styles/SlidebarAndModal/modal.css";

const Animation = React.createContext();

export default function SidebarAndModal() {
  const [showModal, setShowModal] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const moveNav = () => {
    setShowNav(true);
  };

  return (
    <Animation.Provider value={{ showNav, setShowNav, setShowModal }}>
      <header>
        {showNav && <Navigation />}
        <Menu moveNav={moveNav} />
      </header>
      <main>
        <button
          id="show-modal"
          onClick={() => {
            setShowModal(true);
          }}
        >
          show modal
        </button>
        {showModal && <Modal />}
      </main>
    </Animation.Provider>
  );
}

function Menu({ moveNav }) {
  return (
    <button
      id="menu"
      onClick={() => {
        moveNav();
      }}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
}

function Navigation() {
  const { showNav, setShowNav } = useContext(Animation);
  const nav = useRef(null);

  useEffect(() => {
    nav.current.style.transform = "translateX(0vw)";
  }, [showNav]);

  return (
    <>
      <nav ref={nav}>
        <div id="info">
          <h3>
            coding <span>addict</span>
          </h3>
          <button
            id="close-nav"
            onClick={() => {
              nav.current.style.transform = "translateX(-100vw)";
              setTimeout(() => {
                setShowNav(false);
              }, 500);
            }}
          >
            <Close fontSize="large" />
          </button>
        </div>
        <ul id="pages">
          <li>
            <Home />
            <a href="">home</a>
          </li>
          <li>
            <Group />
            <a href="">team</a>
          </li>
          <li>
            <Folder />
            <a href="">projects</a>
          </li>
          <li>
            <CalendarToday />
            <a href="">calendar</a>
          </li>
          <li>
            <Description />
            <a href="">documents</a>
          </li>
        </ul>
        <Socials />
      </nav>
    </>
  );
}

function Modal() {
  const { setShowModal } = useContext(Animation);

  return (
    <section id="modal">
      <article id="content">
        <button id="close-nav" onClick={() => setShowModal(false)}>
          <Close fontSize="large" />
        </button>
        <h4>modal content</h4>
      </article>
    </section>
  );
}

function Socials() {
  return (
    <section id="socials">
      <ul>
        <li>
          <a href="">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="">
            <LinkedIn />
          </a>
        </li>
        <li>
          <a href="">
            <GitHub />
          </a>
        </li>
        <li>
          <a href="">
            <YouTube />
          </a>
        </li>
      </ul>
    </section>
  );
}
