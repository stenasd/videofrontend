import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";
import {
    BrowserRouter as Router,
    Link,

} from "react-router-dom";
export default function Home(props) {

    
    useEffect(() => {
        axios.get('http://172.20.0.1:6969/videodata', { withCredentials: true })
            .then(res => {
                console.log("movedata" + JSON.stringify(res.data))
                var moviearray =[]
                res.data.forEach(element => {
                    console.log("ddd")
                    moviearray.push(<Moviecard key={element.id} name={element.name} image={"https://placekitten.com/g/64/64"} id={element.id} />)
                })
                setmoviejson(moviearray)
                
            })
            .catch((error) => {
                console.log("getmoveerror")

            });

            
    }, []);


    const [moviejson, setmoviejson] = useState(false);
 

    return (
      moviejson
    );
}

function Moviecard(prop) {
    return (
        <div className="card">


            <a href={"http://172.20.0.1:6969/video/" + prop.id} style={{ textDecoration: "none" }}>
                <img className="image" src="https://placekitten.com/g/64/64" alt="movieposter" />
                <div className="container">

                    <h4><b>{prop.name}</b></h4>
                </div>
            </a>
        </div>
    )
}




