import React from 'react';
import styles from '../components/sideNav.module.css'

const SideNav = () => {
    return (
        <div className={styles.sideNav}>
            <div className={styles.sideNave_home}>
                <i class="fa-solid fa-house"></i>
                <p>Home</p>
            </div>
            <div className={styles.sideNave_explore}>
                <i class="fa-solid fa-compass"></i>
                <p>Explore</p>
            </div>
            <div className={styles.sideNave_subs}>
                <i class="fa-solid fa-s"></i>
                <p>Shorts</p>
            </div>
            <div className={styles.sideNave_originals}>
                <i class="fa-solid fa-circle-play"></i>
                <p>Originals</p>
            </div>
            <div className={styles.sideNave_music}>
                <i class="fa-solid fa-music"></i>
                <p>Music</p>
            </div>
            <div className={styles.sideNave_library}>
                <i class="fa-solid fa-book-open"></i>
                <p>Library</p>
            </div>
            <div className={styles.sideNave_downloads}>
                <i class="fa-solid fa-download"></i>
                <p>Downloads</p>
            </div>

        </div>
           
        
    );
};

export default SideNav;