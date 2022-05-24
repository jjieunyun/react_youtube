import React from 'react';
import styles from './video_detail.module.css'

const VideoDetail = ({video}) => {
    return (
        <sction className={styles.detail}>
            <iframe 
                className={styles.video}
                type="text/html" 
                width="100%" 
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameborder="0" 
                allowfullscreen>
            </iframe>

            <div class="infoAndUpnext">
                   { /*<!--video info-->*/}
                    <div className={styles.video_info}>
                    <section className={styles.info}>
                       {/*<!--metadata-->*/}
                        <div className={styles.metadata}>
                                <ul className={styles.hashtags}>
                                    <li>#Ocean</li>
                                    <li>#Youtube실습</li>
                                    <li>#jieun</li>
                                </ul>
                        </div>
                        <div className={styles.titleAndButton}>
                                <span className={styles.title}
                                >{video.snippet.title}
                                </span>
                                <h3>{video.snippet.channelTitle}</h3>
                                <button className={styles.moreBtn} style="margin-left: 15px">
                                    <i class="fas fa-caret-down"></i>
                                </button>
                        </div>
                        <span className={styles.views}>1M views 1 month ago</span>

                        {/*<!--acrions-->*/}
                        <ul className={styles.actions}>
                            <li>
                                <button><i class="active fa-solid fa-thumbs-up"></i><span>1K</span></button>
                            </li>
                            <li>
                                <button><i class="fa-solid fa-thumbs-down"></i><span>0</span></button>
                            </li>
                            <li>
                                <button><i class="fa-solid fa-share"></i><span>Share</span></button>
                            </li>
                            <li>
                                <button><i class="fa-solid fa-plus"></i><span>Save</span></button>
                            </li>
                            <li>
                                <button><i class="fa-solid fa-flag"></i><span>Report</span></button>
                            </li>

                        </ul>

                        {/*<!--채널정보-->*/}
                        <div className={styles.channel}>
                            <div className={styles.metadata}>
                                <img src="./img/instagram_profile_image.png" alt="">
                                <div class="info">
                                    <span className={styles.name}>드림코딩By지은</span>
                                    <span className={styles.subscribers}>1M subscribers</span>
                                </div>
                            </div>
                            <button className={styles.subscribe}>Subscribe</button>
                        </div>
                    {/*<!--acrions-->*/}
                </section>
                </div>
                    <div className={styles.description}>
                    <p>{video.snippet.description}</p>
                </div>
            
        </sction>
    );
};

export default VideoDetail;

{/* <h2>{video.snippet.title}</h2>
            <h3>{video.snippet.channelTitle}</h3>
            <span className={styles.views}>1M views 1 month ago</span>
            <div className={styles.description}>
                <p>{video.snippet.description}</p>
            </div> */}