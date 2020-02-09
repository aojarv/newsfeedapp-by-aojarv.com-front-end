import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./index.css";
import Axios from "axios";
import nytimes from "./poweredby_nytimes_200c.png";
import wantsomenews from "./wantsomenews.png";
import New from "./new.js";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1),
    fontSize: 16
  },
  input: {
    display: "none"
  }
}));

const TopStories = () => {
  const [articles, setArticles] = useState([]);
  const [section, setSection] = useState("");
  const sections = [
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "national",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sports",
    "sundayreview",
    "technology",
    "theater",
    "tmagazine",
    "travel",
    "upshot",
    "world"
  ];
  const classes = useStyles();

  const getData = () => {
    const URL = `https://newsfeedapp-by-aojarv.com/topstories`;
    Axios.get(URL).then(response => {
      const arr = [];
      for (let i = 0; i < response.data.length; i++) {
        let title = "";
        let abstract = "";
        let url = "";
        let pic = "";
        let alt = "";
        if (response.data[i].section === section) {
          title = response.data[i].title;
          abstract = response.data[i].abstract;
          url = response.data[i].url;
          pic = response.data[i].pic;
          alt = response.data[i].alt;
        }
        let singleObject = {
          title: title,
          abstract: abstract,
          url: url,
          pic: pic,
          alt: alt
        };
        if (!!title && title.length > 0) {
          arr.push(singleObject);
        }
      }
      setArticles(arr);
    });
  };

  const handleSectionChange = event => {
    setSection(event.target.value);
  };

  const Whichsection = () => {
    return (
      <div>
        <p>
          <FormControl className={classes.formControl}>
            <InputLabel id="Section">Section?</InputLabel>
            <Select
              labelId="section-label"
              id="section"
              value={section}
              onChange={handleSectionChange}
            >
              {sections.map(item => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            onClick={getData}
            variant="contained"
            className={classes.button}
          >
            Search for news:-)
          </Button>
        </p>
      </div>
    );
  };

  const Map = () => {
    if (articles.length === 0) {
      return null;
    } else {
      return (
        <>
          {articles.map(item => (
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
        <Whichsection />
        <Map />
      </body>
      <footer>
        <a
          href="https://developer.nytimes.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={nytimes} alt="nytimes" />
        </a>
      </footer>
    </>
  );
};

export default TopStories;
