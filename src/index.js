import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
import './index.css'

const New = (props) => {
    return(
        <div className="new">
            <h1>
                Hello world
            </h1>
        </div>
    )
}

const App = () => {

    const getData = () => {
        const URL = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=xGsgXlF7e8OzGsfLXyAWazfAZBhG4IA3`
        Axios.get(URL).then(response => {

        })
    }

    return(
        <New/>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);