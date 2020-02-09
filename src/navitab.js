import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import TimesWire from "./timeswire";
import TopStories from "./topstories";
import Mostpopular from "./mostpopular";

const defaultPath = path => {
  if (path === "/mostsharedandviewed") {
    return 2;
  } else if (path === "/searchbysection") {
    return 1;
  } else {
    return 0;
  }
};

const Navitab = () => {
  const currentPath = window.location.pathname;
  const [value, setValue] = useState(defaultPath(currentPath));
  const handleChange = newValue => {
    setValue(newValue);
  };
  return (
    <>
      <Router>
        <Tabs value={value} indicatorColor="primary" onChange={handleChange}>
          <Tab label="Times Wire" component={Link} to="/" />
          <Tab
            label="Search by section"
            component={Link}
            to="/searchbysection"
          />
          <Tab
            label="Most Popular"
            component={Link}
            to="/mostsharedandviewed"
          />
        </Tabs>

        <Switch>
          <Route exact path="/" component={TimesWire} />

          <Route exact path="/searchbysection" component={TopStories} />

          <Route exact path="/mostsharedandviewed" component={Mostpopular} />
        </Switch>
      </Router>
    </>
  );
};

export default Navitab;
