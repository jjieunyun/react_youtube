import React, { Component } from 'react';

class VideoItem extends Component {
    render() {
        return (
            <div>
                <iframe 
                    id="gim2kprjL50"
                    url= "https://i.ytimg.com/vi/gim2kprjL50/default.jpg",
                    width= 120,
                    "height": 90
                    style='border: solid 4px #37474F'
                ></iframe>
            </div>
        );
    }
}

export default VideoItem;