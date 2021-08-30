import React, { useState } from "react";
import "../styles/Menu.css";
import menu from "../data/menu.js";

export default function Menu() {
  const [currentCategory, setCurrentCategory] = useState("all");

  const handleCategory = (e) => {
    setCurrentCategory(e.target.textContent);
  };

  return (
    <main>
      <section id="menu">
        <h1>Our Menu</h1>
        <div id="line"></div>
        <nav>
          <ul>
            <li onClick={handleCategory}>all</li>
            <li onClick={handleCategory}>breakfast</li>
            <li onClick={handleCategory}>lunch</li>
            <li onClick={handleCategory}>shakes</li>
          </ul>
        </nav>
        <div id="items-ctn">
          {menu.map((item) => {
            return currentCategory == "all" ? (
              <Item key={item.id} type={item.category} {...item} />
            ) : (
              currentCategory == item.category && (
                <Item key={item.id} type={item.category} {...item} />
              )
            );
          })}
        </div>
      </section>
    </main>
  );
}

function Item({ title, price, img, desc }) {
  return (
    <article class="item">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h4 class="price">${price}</h4>
      <div class="item-info-sep"></div>
      <p>{desc}</p>
    </article>
  );
}
