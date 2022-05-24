    class Youtube {
        constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        }
    
        mostPopular() {
            //⭐인자값으로 아무것도 없다면 컴포넌트의 state나 props가 바뀔때만 호출
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=28&regionCode=KR&key=${this.key}`,
            this.getRequestOptions
        //⭐작업을 편하게 하려면 text json이 편하다
        //.then(response => response.text())
        )
        .then(response => response.json())
        .then(result=> result.items)
        }
    
        search(query) {
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions
        )
         .then(response => response.json())
        .then(result =>result.items && result.items.map(item => ({ ...item, id: item.id.videoId })));
        }
    }
    
    export default Youtube;