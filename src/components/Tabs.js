import React, { useEffect, useState } from "react";
import "../styles/Tabs.css";

const url = "https://course-api.com/react-tabs-project";

export default function Tabs() {
  const [data, setData] = useState([]);
  const [currentContent, setCurrentContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const changeCompany = (e) => {
    data.map((content) => {
      if (e.target.textContent == content.company) setCurrentContent(content);
    });
  };

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) return resp.json();
        else throw new Error(resp.status);
      })
      .then((result) => {
        setData(result);
        setCurrentContent(result[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <header>
            <h1>Experience</h1>
            <div id="line"></div>
          </header>
          <nav>
            <ul>
              {data.map((content) => {
                return currentContent.order == content.order ? (
                  <li className="selected" key={content.order}>
                    {content.company}
                  </li>
                ) : (
                  <li onClick={changeCompany} key={content.order}>
                    {content.company}
                  </li>
                );
              })}
            </ul>
          </nav>
          {data.map((content) => {
            return (
              currentContent.id == content.id && (
                <Content key={content.id} {...content} />
              )
            );
          })}
          <button>more info</button>
        </>
      )}
    </main>
  );
}

function Content({ title, company, dates, duties }) {
  return (
    <section id="description">
      <h3>{title}</h3>
      <div id="company">{company}</div>
      <h5>{dates}</h5>
      <div id="duties-ctn">
        {duties.map((dutie) => {
          return <Dutie dutie={dutie} />;
        })}
      </div>
    </section>
  );
}

function Dutie({ dutie }) {
  return (
    <>
      <span>&#187;</span>
      <p>{dutie}</p>
    </>
  );
}
