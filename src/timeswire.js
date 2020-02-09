import React, { useState, useEffect } from "react";
import Axios from "axios";
import nytimes from "./poweredby_nytimes_200c.png";
import wantsomenews from "./wantsomenews.png";
import New from "./new.js";

const TimesWire = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const URL = `https://newsfeedapp-by-aojarv.com/timeswire`;
    Axios.get(URL).then(response => {
      const arr = [];
      for (let i = 0; i < response.data.length; i++) {
        let singleObject = {
          title: response.data[i].title,
          abstract: response.data[i].abstract,
          url: response.data[i].url,
          pic: response.data[i].pic,
          alt: response.data[i].alt
        };
        arr.push(singleObject);
      }
      setNews(arr);
    });
  }, []);

  const Map = () => {
    if (news.length === 0) {
      return null;
    } else {
      return (
        <>
          {news.map(item => (
            <New
              title={item.title}
              url={item.url}
              abstract={item.abstract}
              pic={item.pic}
              alt={item.alt}
            />
          ))}
        </>
      );
    }
  };

  return (
    <>
      <header>
        <div className="scale">
          <img src={wantsomenews} />
        </div>
      </header>
      <body>
        <Map />
      </body>
      <footer>
        <h1>
          <a
            href="https://developer.nytimes.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={nytimes} alt="nytimes" />
          </a>
        </h1>
      </footer>
    </>
  );
};

export default TimesWire;
