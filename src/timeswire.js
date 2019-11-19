import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { isFulfilled } from 'q'

const TimesWire = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
      const URL = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=xGsgXlF7e8OzGsfLXyAWazfAZBhG4IA3`
      Axios.get(URL).then(response => {
        const arr = []
          for(let i = 0; i < response.data.results.length; i++){

            let singleObject = {
              title: response.data.results[i].title,
              abstract: response.data.results[i].abstract,
              url: response.data.results[i].url
            }
            arr.push(singleObject)
          }
          setNews(arr)
      })
  }, [])

  const New = (props) => {
      return(
          <div className="new">
              <h1>
                  {props.title}
              </h1>
              <p>
                  {props.abstract}
              </p>  
              <img src={props.pic}></img>
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
          {news.map(item => <a href={item.url} target="_blank"><New title={item.title} abstract={item.abstract} pic={item.pic}/></a>)}
        </>
      )
    }
  }

  const getPic = () => {
    console.log(news.pic)
    console.log(news)
  }

  return(
      <>
      <header>
      <button onClick={getPic}>xd</button>
      </header>
      <body>
        <Map/>
      </body>
      <footer>
        <h1>
          News provided by The New York Times
        </h1>
      </footer>
      </>
  )
}

export default TimesWire