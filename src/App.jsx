
import React, { Component } from 'react';
import './App.css';
import Search from './components/search';
import VideoList from './components/videoList';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Search/>
        <VideoList/>
      </div>
    );
  }
}

export default App;