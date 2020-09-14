import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import "../App.css";
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

class Video extends Component {

    player = {}
    state = {
        video: {
            src: "/api/video/2.mp4",
            poster: "http://www.example.com/path/to/video_poster.jpg",
            lastupdate: 0
        }
    }

    onPlayerReady(player) {
        console.log("Player is ready: ", player);
        this.state.video.lastupdate = this.props.time
        player.autoplay('muted');
        player.currentTime(this.props.time)
        this.player = player;

    }
    onVideoTimeUpdate(duration) {

        let realduration = duration
        var timertime = 2
        var lastupdate = this.state.video.lastupdate

        if (lastupdate < duration) {
            axios.post('/api/uservideodata', { "id": this.props.id, "time": realduration }, { withCredentials: true })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log("Time updated: ", duration);
            //run videodata to user post here
            this.state.video.lastupdate = duration + timertime
        }
    }
    render() {
        console.log("props" + JSON.stringify(this.props))
        return (
            <div>

                <h3>ID: {this.props.id}</h3>
                <VideoPlayer
                    autoplay={true}
                    controls={true}
                    src={"/api/video/" + this.props.id + ".mp4"}
                    onReady={this.onPlayerReady.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    className="videoclass"


                />
            </div>
        );
    }
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    let { time } = useParams();
    console.log(id + " " + time)
    return (
        <div>
            <Video id={id} time={time} />
        </div>
    );
}

export default Child