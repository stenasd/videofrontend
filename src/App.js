import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Videocomp from "./pages/Vidcomp.js"
import Login from "./pages/login.js"
import Movielist from "./pages/movielist.js"
import axios from 'axios';
export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">login</Link>
                        </li>
                        <li>
                            <Link to="/video">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/video">
                        <Videocomp vidid="1" />
                    </Route>
                    <Route path="/login">

                        <Login />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    //if getrequest works render movielist if not send to login
    axios.get(`http://172.19.0.1:6969/`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
      })
    let user = true
    if(user){
        return <Movielist/>
    }
    return  <Redirect to="/login" />

}

