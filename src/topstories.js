import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Axios from 'axios'
import nytimes from "./poweredby_nytimes_200c.png"
import wantsomenews from "./wantsomenews.png"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
    fontSize: 16,
  },
  input: {
    display: 'none',
  },
}));

const TopStories = () => {
  const [articles, setArticles] = useState([])
  const [section, setSection] = useState("")
  const sections = ["arts", "automobiles", "books", "business", "fashion", "food",
                    "health", "home", "insider", "magazine", "movies", "national", 
                    "nyregion", "obituaries", "opinion", "politics", "realestate",
                    "science", "sports", "sundayreview", "technology", "theater",
                    "tmagazine", "travel", "upshot", "world"]
  const classes = useStyles();

  const getData = () => {
    const URL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=xGsgXlF7e8OzGsfLXyAWazfAZBhG4IA3`
    Axios.get(URL).then(response => {
      const arr = []
        for(let i = 0; i < response.data.results.length; i++){
          let picture = ``
          let cpr = ``
          if(!!response.data.results[i].multimedia && response.data.results[i].multimedia.length > 0){
            picture = response.data.results[i].multimedia[1].url
            cpr = response.data.results[i].multimedia[1].copyright
          }
          else{
            picture = ``
            cpr = ``
          }
          let singleObject = {
            title: response.data.results[i].title,
            abstract: response.data.results[i].abstract,
            url: response.data.results[i].url,
            pic: picture,
            alt: cpr
          }
        arr.push(singleObject)
      }
      console.log(URL)
      setArticles(arr)
    })
  }

  const handleSectionChange = event => {
    setSection(event.target.value)
  }

  const Whichsection = () => {
    return(
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
              {sections.map(item => <MenuItem value={item}>{item}</MenuItem>)}
            </Select>
          </FormControl>
          <Button onClick={getData} variant="contained" className={classes.button}>Search for news:-)</Button>
        </p>
      </div>
    )
  }

  const New = (props) => {
    return(
      <div className="new">
        <div className="content">
          <h1>
            {props.title}
          </h1>
          <p>
            {props.abstract}
          </p> 
        </div>
        <div className="pic">
          <img src={props.pic} alt={props.alt}></img>
        </div>
      </div>
    )
  }

  const Map = () => {
    if(articles.length === 0){
      return null
    }
    else{
      return(
        <>
          {articles.map(item => <a href={item.url} target="_blank" rel="noopener noreferrer"><New title={item.title} abstract={item.abstract} pic={item.pic} alt={item.alt}/></a>)}
        </>
      )
    }
  }

  return(
    <>
    <header>
    <img src={wantsomenews}/>
    </header>
    <body>
      <Whichsection/>
      <Map/>
    </body>
    <footer>
    <a href="https://developer.nytimes.com/" target="_blank" rel="noopener noreferrer"><img src={nytimes} alt="nytimes"/></a>
    </footer>
    </>
  )
}

export default TopStories