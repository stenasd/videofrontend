import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";
export default function PersonList() {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        axios.get('http://172.20.0.1:6969/checkAuthentication',{ withCredentials: true })
            .then(res => {
                console.log("authenticated")
                setLoggedIn(res.data.authenticated);
            })
            .catch((error) => {
                console.log("notauthenticated")
                setLoggedIn(false)
            });
    }, []);

    if(loggedIn){
        return(<p>logedin</p>)
    }
    return (
        <div>
            <form action="http://172.20.0.1:6969/login" method="post">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" /><br />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )

}
