import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Axios from 'axios'
import nytimes from "./poweredby_nytimes_200c.png"

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
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

const Mostpopular = () => {
    const [populars, setPopulars] = useState([])
    const [sorv, setSorv] = useState("")
    const [when, setWhen] = useState("")
    const classes = useStyles()

    const getData = () => {
        const URL = `https://api.nytimes.com/svc/mostpopular/v2/${sorv}/${when}.json?api-key=xGsgXlF7e8OzGsfLXyAWazfAZBhG4IA3`
        Axios.get(URL).then(response => {
            const arr = []
              for(let i = 0; i < response.data.results.length; i++){
                let picture = ""
                let cpr = ``
                if(response.data.results[i].media[0]["media-metadata"][1].url === null){
                  picture = ""
                }
                else{
                  picture = response.data.results[i].media[0]["media-metadata"][1].url
                  cpr = response.data.results[i].media[0]["media-metadata"][1].copyright
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
            setPopulars(arr)
        })
    }

    const handleSorvChange = event => {
        setSorv(event.target.value)
    }

    const handleWhenChange = event => {
        setWhen(event.target.value)
    }

    const SharedOrViewed = () => {
        return(
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
                                <MenuItem value={1}>today</MenuItem>
                                <MenuItem value={7}>last week</MenuItem>
                                <MenuItem value={30}>last month</MenuItem>
                            </Select>
                    </FormControl>
                    <Button onClick={getData} variant="contained" className={classes.button}>go go))</Button>
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
        if(populars.length === 0){
          return null
        }
        else{
          return(
            <>
              {populars.map(item => <a href={item.url} target="_blank" rel="noopener noreferrer"><New title={item.title} abstract={item.abstract} pic={item.pic} alt={item.alt}/></a>)}
            </>
          )
        }
      }

      return(
          <>
          <header>

          </header>
          <body>
            <SharedOrViewed/>
            <Map/>
          </body>
          <footer>
            <img src={nytimes} alt="nytimes"/>
          </footer>
          </>
      )

}

export default Mostpopular