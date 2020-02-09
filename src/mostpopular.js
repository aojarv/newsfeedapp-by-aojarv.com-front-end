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
    minWidth: 200
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

const Mostpopular = () => {
  const [populars, setPopulars] = useState([]);
  const [sorv, setSorv] = useState("");
  const [when, setWhen] = useState("");
  const classes = useStyles();

  const getData = () => {
    const URL = `https://newsfeedapp-by-aojarv.com/mostpopular`;
    Axios.get(URL).then(response => {
      const arr = [];
      for (let i = 0; i < response.data.length; i++) {
        let title = "";
        let abstract = "";
        let url = "";
        let pic = "";
        let alt = "";
        if (response.data[i].sorv === sorv && response.data[i].wheen === when) {
          title = response.data[i].title;
          abstract = response.data[i].abstract;
          url = response.data[i].url;
          pic = response.data[i].pic;
          alt = "";
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
      setPopulars(arr);
    });
  };

  const handleSorvChange = event => {
    setSorv(event.target.value);
  };

  const handleWhenChange = event => {
    setWhen(event.target.value);
  };

  const SharedOrViewed = () => {
    return (
      <div>
        <p>
          <FormControl className={classes.formControl}>
            <InputLabel id="SharedOrViewed">Shared or viewed?</InputLabel>
            <Select
              labelId="sharedorviewed-label"
              id="sharedorviewed"
              value={sorv}
              onChange={handleSorvChange}
            >
              <MenuItem value={"shared"}>most shared</MenuItem>
              <MenuItem value={"viewed"}>most viewed</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="When">When</InputLabel>
            <Select
              labelId="when-label"
              id="when"
              value={when}
              onChange={handleWhenChange}
            >
              <MenuItem value={"1"}>today</MenuItem>
              <MenuItem value={"7"}>last week</MenuItem>
              <MenuItem value={"30"}>last month</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={getData}
            variant="contained"
            className={classes.button}
          >
            →
          </Button>
        </p>
      </div>
    );
  };

  const Map = () => {
    if (populars.length === 0) {
      return null;
    } else {
      return (
        <>
          {populars.map(item => (
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
        <SharedOrViewed />
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

export default Mostpopular;
