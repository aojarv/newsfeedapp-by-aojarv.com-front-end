import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import TimesWire from './timeswire'
import TopStories from './topstories'
import Mostpopular from './mostpopular'

const Navitab = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return(
    <>
    <Router>
    <Tabs value={value}
    indicatorColor="primary"
    onChange={handleChange}>
      <Tab label="TimesWire" component={Link} to="/" />
      <Tab label="TopStories" component={Link} to="/searchbysection" />
      <Tab label="MostPopular" component={Link} to="/mostsharedandviewed" />
    </Tabs>

    <Switch>
      <Route
      exact path="/"
      component={TimesWire}/>

      <Route
      exact path="/searchbysection"
      component={TopStories}/>

      <Route
      exact path="/mostsharedandviewed"
      component={Mostpopular}/>
    </Switch>
    </Router>
    </>
  )
}

export default Navitab