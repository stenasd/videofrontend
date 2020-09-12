import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import "../App.css";
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
            poster: "http://www.example.com/path/to/video_poster.jpg"
        }
    }

    onPlayerReady(player) {
        console.log("Player is ready: ", player);
        player.currentTime(44)
        this.player = player;
    }
    render() {
        console.log("props" + JSON.stringify(this.props))
        return (
            <div>

                <h3>ID: {this.props.id}</h3>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
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

    return (
        <div>
            <Video id={id} />        
        </div>
    );
}

export default Child