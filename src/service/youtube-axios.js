    import axios from 'axios';


    class YoutubeAxios {
        constructor(key) {
            this.youtube = axios.create({
                baseURL : 'https://youtube.googleapis.com/youtube/v3',
                params : {key : key},
            });
        }
    
        mostPopular() {
            //라이브러리 자체에서 json으로 변경해줌
        const response = await this.youtube.get('videos', {
            params : {
                part : 'snippet',
                chart : 'mostPopular',
                maxResults: 28,
            }
        });
        return response.data.items;
        }
    
        search(query) {
        const response = await this.youtube.get('search', {
            params : {
                part : 'snippet',
                maxResults: 28,
                type : 'video',
                q : query
            }
        })
        
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
        }
    }
    
    export default Youtube;