import React from 'react';

const VideoItem = (props) => {
    return (
        <div>
            <h3>{props.video.snippet.title}</h3>
        </div>
    );
};

export default VideoItem;