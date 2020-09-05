import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';

 
class video extends Component {
   
    player = {}
    state = {
        video: {
            src: "https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4",
            poster: "http://www.example.com/path/to/video_poster.jpg"
        }
    }
 
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        player.currentTime(99)
        this.player = player;
    } 
    render() {
        console.log("props"+JSON.stringify(this.props))
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                    

                />
            </div>
        );
    }
}
export default video