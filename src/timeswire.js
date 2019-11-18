import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const TimesWire = () => {

  const [data, setData] = useState("")
  const [news, setNews] = useState([])

  const getData = () => {
      console.log(data)
      console.log(news)
  }

  useEffect(() => {
      const URL = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=xGsgXlF7e8OzGsfLXyAWazfAZBhG4IA3`
      Axios.get(URL).then(response => {
        const arr = []

          for(let i = 0; i < response.data.results.length; i++){
            let singleObject = {
              title: response.data.results[i].title,
              abstract: response.data.results[i].abstract
            }
            arr.push(singleObject)
          }
          
          setNews(arr)
          setData(response.data.results)
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
        {news.map(item => <New title={item.title} abstract={item.abstract}/>)}
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
        <button onClick={getData}>xd</button>
      </body>
      <footer>

      </footer>
      </>
  )
}

export default TimesWire