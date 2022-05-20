import React, { useEffect,useState } from 'react';
import './App.css';
import Search from './components/search';
import VideoList from './components/video_list/videoList';


const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
  //⭐인자값으로 아무것도 없다면 컴포넌트의 state나 props가 바뀔때만 호출
      const requestOptions = {
        method: 'GET',
        //⭐request할때 옵션전달
        redirect: 'follow'
      };
      
      fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=US&key=AIzaSyD8cQCIhK_BYYvpIi46SkHciB2y98vEW_Y&key=AIzaSyD8cQCIhK_BYYvpIi46SkHciB2y98vEW_Y", requestOptions)
        //⭐작업을 편하게 하려면 text json이 편하다
      //.then(response => response.text())
        .then(response => response.json())
        .then(result =>setVideos(result.items))
        .catch(error => console.log('error', error));
  },[]);

  return (
    <div className="App">
      <Search/>
      <VideoList videos={videos} />
    </div>
  );
};

export default App;




