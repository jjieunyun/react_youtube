import React, { useCallback, useEffect, useState } from 'react';
import styles from './App.module.css';
import VideoList from './components/video_list/video_list';
import Search from './components/seach_header/search';
import VideoDetail from './components/video_detail/video_detail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] =useState(null);

  const selecteVideo = (video) => {
    setSelectedVideo(video);
  }

  //⭐메모리상에 계속 보관되어있어 성능이 안 좋아 질 수있다.(조심해서 사용해야됨)
  const search = useCallback( query => {
    youtube
      .search(query) //
      .then(videos => {
        setVideos(videos);
        //⭐search되고나면 홈화면으로 돌아가기!
        selecteVideo(null);
      });
  },[]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  },[youtube]);

  
  return (
    <div className={styles.app}>
      <Search onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selecteVideo} display={ selectedVideo? 'list' : 'grid' } />
        </div>
        
      </section>
    </div>
  );
}

export default App;
