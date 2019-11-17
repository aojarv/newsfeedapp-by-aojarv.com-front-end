import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
import './index.css'

const App = () => {

    const [data, setData] = useState("")
    const [titles, setTitles] = useState([])
    const [abstracts, setAbstracts] = useState([])

    const getData = () => {
        console.log(data)
        console.log(titles)
        console.log(abstracts)
    }

    useEffect(() => {
        const URL = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=xGsgXlF7e8OzGsfLXyAWazfAZBhG4IA3`
        Axios.get(URL).then(response => {
            setTitles(titles => [...titles, response.data.results[0].title, response.data.results[1].title, 
                                            response.data.results[2].title, response.data.results[3].title, 
                                            response.data.results[4].title, response.data.results[5].title,
                                            response.data.results[6].title, response.data.results[7].title,
                                            response.data.results[8].title, response.data.results[9].title,
                                            response.data.results[10].title, response.data.results[11].title,
                                            response.data.results[12].title, response.data.results[13].title,
                                            response.data.results[14].title, response.data.results[15].title,
                                            response.data.results[16].title, response.data.results[17].title,
                                            response.data.results[18].title, response.data.results[19].title,])  
            setAbstracts(abstracts => [...abstracts, response.data.results[0].abstract, response.data.results[1].abstract,
                                            response.data.results[2].abstract, response.data.results[3].abstract,
                                            response.data.results[4].abstract, response.data.results[5].abstract,
                                            response.data.results[6].abstract, response.data.results[7].abstract,
                                            response.data.results[8].abstract, response.data.results[9].abstract,
                                            response.data.results[10].abstract, response.data.results[11].abstract,
                                            response.data.results[12].abstract, response.data.results[13].abstract,
                                            response.data.results[14].abstract, response.data.results[15].abstract,
                                            response.data.results[16].abstract, response.data.results[17].abstract,
                                            response.data.results[18].abstract, response.data.results[19].abstract,])
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

    return(
        <>
        <New title={titles[0]} abstract={abstracts[0]}/>
        <New title={titles[1]} abstract={abstracts[1]}/>   
        <New title={titles[2]} abstract={abstracts[2]}/>   
        <New title={titles[3]} abstract={abstracts[3]}/>   
        <New title={titles[4]} abstract={abstracts[4]}/>   
        <New title={titles[5]} abstract={abstracts[5]}/>   
        <New title={titles[6]} abstract={abstracts[6]}/>   
        <New title={titles[7]} abstract={abstracts[7]}/>   
        <New title={titles[8]} abstract={abstracts[8]}/>   
        <New title={titles[9]} abstract={abstracts[9]}/>   
        <New title={titles[10]} abstract={abstracts[10]}/>         
        <New title={titles[11]} abstract={abstracts[11]}/>   
        <New title={titles[12]} abstract={abstracts[12]}/>   
        <New title={titles[13]} abstract={abstracts[13]}/>   
        <New title={titles[14]} abstract={abstracts[14]}/>   
        <New title={titles[15]} abstract={abstracts[15]}/>   
        <New title={titles[16]} abstract={abstracts[16]}/>   
        <New title={titles[17]} abstract={abstracts[17]}/>   
        <New title={titles[18]} abstract={abstracts[18]}/>   
        <New title={titles[19]} abstract={abstracts[19]}/>   

        
        <button onClick={getData}>xd</button>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
