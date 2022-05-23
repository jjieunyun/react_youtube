import styles from '../components/search.module.css'

import React,{useRef, useState} from 'react';

const Search = ({onSearch}) => {
    const inputRef = useRef();
    const [pValue, setPValue] = useState('Trending videos');
    const [result, setResult] = useState('')

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value)
        setPValue('The search results of ')
        setResult(`${inputRef.current.value}`)
    }

    const onClick= ()=>{
        handleSearch();
    }

    const onkeyPress = (event) => {
        if(event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logobox}>
                <i className='fa-brands fa-youtube'></i>
                <p>YouTube</p>
            </div>
            <input
                ref={inputRef}
                onKeyPress={onkeyPress} 
                placeholder='Search...'
                type="text" />
            <button
                onClick={onClick}>
                <i type='submit' className="fa-solid fa-magnifying-glass"></i>
            </button>
            <p 
                className={styles.videos_title}
                
            >{pValue}<span className={styles.videos_value}>{result}</span></p>
        </header>
    );
};

export default Search;