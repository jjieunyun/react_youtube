import React, { useEffect,useState } from 'react';
import styles from './App.module.css';
import Search from './components/search';
//import SideNav from './components/sideNav';
import VideoList from './components/video_list/videoList';


// const App = () => {
// //⭐query를 인자값으로
//   const [videos, setVideos] = useState([]);
//   const search = query => {
//     const requestOptions = {
//       method: 'GET',
//       redirect: 'follow'
//     };
    
//     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=AIzaSyDB1-CImqPIh7dO7HY6O7plTrTus5IDenk`, requestOptions)
//       .then(response => response.json())
//       .then(result => result.items.map(item => ({...item, id : item.id.videoId})))
//       .then(items => setVideos(items))
//       .catch(error => console.log('error', error));
//   }

//   useEffect(()=> {
//   //⭐인자값으로 아무것도 없다면 컴포넌트의 state나 props가 바뀔때만 호출
//       const requestOptions = {
//         method: 'GET',
//         //⭐request할때 옵션전달
//         redirect: 'follow'
//       };
      
//       fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=28&regionCode=US&key=AIzaSyD8cQCIhK_BYYvpIi46SkHciB2y98vEW_Y&key=AIzaSyDB1-CImqPIh7dO7HY6O7plTrTus5IDenk", requestOptions)
//         //⭐작업을 편하게 하려면 text json이 편하다
//       //.then(response => response.text())
//         .then(response => response.json())
//         .then(result =>setVideos(result.items))
//         .catch(error => console.log('error', error));
//   },[]);

//   return (
//     <div className={styles.app}>
//       <Search onSearch={search}/>
//       <SideNav/>
//       <VideoList videos={videos} />
//     </div>
//   );
// };

// export default App;




function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  //⭐query를 인자값으로 받아서 fetch해줌
  const search = (query) => {
    youtube
      .search(query) 
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() 
      .then(videos => setVideos(videos));
  });
  return (
    <div className={styles.app}>
      <Search onSearch={search}/>
      <VideoList videos={videos} />
    </div>
  );
}


export default App;