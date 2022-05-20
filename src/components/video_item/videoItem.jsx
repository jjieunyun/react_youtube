import React from 'react';

const VideoItem = (props) => {
    return (
        <div>
            <img src={props.video.snippet.thumbnails.medium.url} alt="" />
            <h3>{props.video.snippet.title}</h3>
        </div>
    );
};

export default VideoItem;