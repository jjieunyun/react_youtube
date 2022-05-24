import React from 'react';
import styles from './video_detail.module.css'

const VideoDetail = ({video}) => {
    

    return (
        <section className={styles.detail}>
            <iframe 
                className={styles.video}
                title='youtube video player'
                type="text/html" 
                width="100%" 
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0" 
                allowFullScreen>
            </iframe>

            <div className={styles.metadata}>
                <ul className={styles.hashtags}>
                    <li>#{video.snippet.channelTitle}</li>
                    <li>#Youtube 클론코딩</li>
                    <li>#jieun</li>
                </ul>
            </div>
            
            <h2>{video.snippet.title}</h2>
            <h3>{video.snippet.channelTitle}</h3>
            <span className={styles.views}>1M views 1 month ago</span>
            

            <ul className={styles.actions}>
                <li>
                    <button><i className="active fa-solid fa-thumbs-up"></i><span>1K</span></button>
                </li>
                <li>
                    <button><i className="fa-solid fa-thumbs-down"></i><span>0</span></button>
                </li>
                <li>
                    <button><i className="fa-solid fa-share"></i><span>Share</span></button>
                </li>
                <li>
                    <button><i className="fa-solid fa-plus"></i><span>Save</span></button>
                </li>
                <li>
                    <button><i className="fa-solid fa-flag"></i><span>Report</span></button>
                </li>
            </ul>
            <hr/>
            <div className={styles.description}>
                <p>{video.snippet.description}</p>
            </div>
            

        </section>
    );
};

export default VideoDetail;
