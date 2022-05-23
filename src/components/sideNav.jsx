import React from 'react';
import styles from '../components/sideNav.module.css'

const SideNav = () => {
    return (
        <div className={styles.sideNav}>
            <div className={styles.sideNave_home}>
                <i className="fa-solid fa-house"></i>
                <p>Home</p>
            </div>
            <div className={styles.sideNave_explore}>
                <i className="fa-solid fa-compass"></i>
                <p>Explore</p>
            </div>
            <div className={styles.sideNave_subs}>
                <i className="fa-solid fa-s"></i>
                <p>Shorts</p>
            </div>
            <div className={styles.sideNave_originals}>
                <i className="fa-solid fa-circle-play"></i>
                <p>Originals</p>
            </div>
            <div className={styles.sideNave_music}>
                <i className="fa-solid fa-music"></i>
                <p>Music</p>
            </div>
            <div className={styles.sideNave_library}>
                <i className="fa-solid fa-book-open"></i>
                <p>Library</p>
            </div>
            <div className={styles.sideNave_downloads}>
                <i className="fa-solid fa-download"></i>
                <p>Downloads</p>
            </div>

        </div>

        
    );
};

export default SideNav;