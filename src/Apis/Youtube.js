import axios from 'axios';

const KEY = 'AIzaSyBMG-1k3_KWfUYIjys5xtTEQy1dkyrNp64';

 export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
  });