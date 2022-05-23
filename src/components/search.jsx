import React, { Component } from 'react';
import styles from '../components/search.module.css'

class Search extends Component {
    render() {
        return (
            <form className={styles.header}>
                <div className={styles.logobox}>
                    <i className='fa-brands fa-youtube'></i>
                    <p>YouTube</p>
                </div>
                <input 
                    placeholder='Search'
                    type="text" />
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        );
    }
}

export default Search;