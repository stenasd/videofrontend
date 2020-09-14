import React, { useState, useEffect } from "react";
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
import "./App.css";
export default function App() {
    return (
        <Router>
            <div>
                <nav>
       
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/video/:id/:time" children={<Videocomp/>} />
                    <Route path="/login">

                        <Login />
                    </Route>
                    <Route path="/movielist">
                        <Movielist />
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

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        
        axios.get('/api/checkAuthentication', { withCredentials: true })
            .then(res => {
                console.log("authenticated")
                setLoggedIn(res.data.authenticated);
            })
            .catch((error) => {
                console.log("notauthenticated")
                setLoggedIn(false)
            });
    }, []);

    return (
        <div>
            {loggedIn ? (
                <div>
                    
                    <Movielist/>
                    </div>
                
            ) : (
                    <div>
                        <Link to="/signup">
                            Signup
            </Link>
                        <Link to="/login">
                            Login
            </Link>
                    </div>
                )}
        </div>
    );
}

