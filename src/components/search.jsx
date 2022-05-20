import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <i className="fa-brands fa-youtube"></i>
                <p>YouTube</p>
                <input type="text" />
                <button>search</button>
            </div>
        );
    }
}

export default Search;