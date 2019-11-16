import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
import './index.css'



const App = () => {

    const [data, setData] = useState("")
    const [title0, setTitle0] = useState("")
    const [abstract0, setAbstract0] = useState("")
    const [title1, setTitle1] = useState("")
    const [abstract1, setAbstract1] = useState("")
    const [title2, setTitle2] = useState("")
    const [abstract2, setAbstract2] = useState("")
    const [title3, setTitle3] = useState("")
    const [abstract3, setAbstract3] = useState("")
    const [title4, setTitle4] = useState("")
    const [abstract4, setAbstract4] = useState("")
    const [title5, setTitle5] = useState("")
    const [abstract5, setAbstract5] = useState("")
    const [title6, setTitle6] = useState("")
    const [abstract6, setAbstract6] = useState("")
    const [title7, setTitle7] = useState("")
    const [abstract7, setAbstract7] = useState("")
    const [title8, setTitle8] = useState("")
    const [abstract8, setAbstract8] = useState("")
    const [title9, setTitle9] = useState("")
    const [abstract9, setAbstract9] = useState("")
    const [title10, setTitle10] = useState("")
    const [abstract10, setAbstract10] = useState("")

    const getData = () => {
        console.log(data)
        console.log(data[0].title)
        console.log(title0)
        console.log(abstract0)
        console.log(title1)
        console.log(abstract1)
    }

    useEffect(() => {
        const URL = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=xGsgXlF7e8OzGsfLXyAWazfAZBhG4IA3`
        Axios.get(URL).then(response => {
            setData(response.data.results)
            setTitle0(response.data.results[0].title)
            setAbstract0(response.data.results[0].abstract)
            setTitle1(response.data.results[1].title)
            setAbstract1(response.data.results[1].abstract)
            setTitle2(response.data.results[2].title)
            setAbstract2(response.data.results[2].abstract)
            setTitle3(response.data.results[3].title)
            setAbstract3(response.data.results[3].abstract)
            setTitle4(response.data.results[4].title)
            setAbstract4(response.data.results[4].abstract)
            setTitle5(response.data.results[5].title)
            setAbstract5(response.data.results[5].abstract)
            setTitle6(response.data.results[6].title)
            setAbstract6(response.data.results[6].abstract)
            setTitle7(response.data.results[7].title)
            setAbstract7(response.data.results[7].abstract)
            setTitle8(response.data.results[8].title)
            setAbstract8(response.data.results[8].abstract)
            setTitle9(response.data.results[9].title)
            setAbstract9(response.data.results[9].abstract)
            setTitle10(response.data.results[10].title)
            setAbstract10(response.data.results[10].abstract)
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
        <New title={title0} abstract={abstract0}/>
        <New title={title1} abstract={abstract1}/>
        <New title={title2} abstract={abstract2}/> 
        <New title={title3} abstract={abstract3}/> 
        <New title={title4} abstract={abstract4}/> 
        <New title={title5} abstract={abstract5}/> 
        <New title={title6} abstract={abstract6}/> 
        <New title={title7} abstract={abstract7}/> 
        <New title={title8} abstract={abstract8}/> 
        <New title={title9} abstract={abstract9}/> 
        <New title={title10} abstract={abstract10}/>       
        
        <button onClick={getData}>xd</button>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
