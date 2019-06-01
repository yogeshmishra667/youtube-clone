import React, { Component } from 'react'
import SearchBar from '../searchBar';
import youtube from '../API/youtube' ;
import VideoLIst from './videoList';
import VideoDetail from './videoDetail';

export default class App extends Component {
   state ={videos: [],selectedVideo: null};

componentDidMount(){
  this.onTermSubmit('ReactJs');
}

  onTermSubmit = async(term) =>{
  const response = await youtube.get('/search',{
         params : {
           q : term
         }
       });

      
    this.setState({ videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo : video})
  }
  


  render() {
    return (
      <div className = 'ui container'>
        <SearchBar onFormSubmit = {this.onTermSubmit} />
         <div className = 'ui grid'>
          <div className = 'ui row'>
           <div className = 'eleven wide column'>
            <VideoDetail video = { this.state.selectedVideo} />
             </div>
             <div className = 'five wide column'>
             <VideoLIst onVideoSelect = {this.onVideoSelect}
                  videos = {this.state.videos} />
         </div>
        </div>
       </div>
      </div>
    )
    
  }
}
