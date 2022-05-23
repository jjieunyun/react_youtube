import React from 'react';
import VideoItem from '../video_item/videoItem';
import styles from './videoList.module.css'

const VideoList = (props) => {
    return (
        <div>
            
            <ul className={styles.videos}>
                {props.videos.map( video => (
                    <VideoItem key={video.id} video={video}/>
                ))}
            </ul>
        </div>
        
    );
};

export default VideoList;