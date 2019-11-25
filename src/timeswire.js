import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import nytimes from "./poweredby_nytimes_200c.png"


const TimesWire = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
      const URL = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=xGsgXlF7e8OzGsfLXyAWazfAZBhG4IA3`
      Axios.get(URL).then(response => {
        const arr = []
          for(let i = 0; i < response.data.results.length; i++){
            let picture = ""
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
          setNews(arr)
      })
  }, [])

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
    if(news.length === 0){
      return null;
    }
    else{
      return(
        <>
          {news.map(item => <a href={item.url} target="_blank" rel="noopener noreferrer"><New title={item.title} abstract={item.abstract} pic={item.pic} alt={item.alt}/></a>)}
        </>
      )
    }
  }

  return(
      <>
      <header>
        
      </header>
      <body>
        <Map/>
      </body>
      <footer>
        <h1>
          <img src={nytimes} alt="nytimes"/>
        </h1>
      </footer>
      </>
  )
}

export default TimesWire