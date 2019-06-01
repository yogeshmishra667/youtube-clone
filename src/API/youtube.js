import axios from 'axios' ;

const KEY = 'AIzaSyCiH5bHOlhB2tD-JYspOn4o_6UoezNR55w' ;


export default axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3' ,
     params:{
       part: 'snippet',
        maxResults: 5,
          key: KEY
   }
});

