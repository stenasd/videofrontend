import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function PersonList() {

    const [name, setname] = useState('');
    const [statepass, setstatepass] = useState('');

    function user(event) {

        setname(event.target.value)
    }
    function pass(event) {

        setstatepass(event.target.value)
    }
    async function handleSubmit(event) {

        event.preventDefault();

        console.log(name)
        console.log(statepass)
        let user = {
            username: name,
            password: statepass
        }
        axios.defaults.withCredentials = true;
        var session_url = 'http://172.19.0.1:6969/login';
        const response = await axios.post(session_url, {}, {
            auth: {
                username: name,
                password: statepass
            }
        });

        console.log(response);
        console.log(response.data);
    };



    return (
        <div>
            <form action="http://172.19.0.1:6969/login" method="post">
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
