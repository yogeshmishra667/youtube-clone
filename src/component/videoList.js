import React from 'react'
import VideoItems from './videoItems';

const VideoLIst = ({ videos, onVideoSelect}) => {
    const renderList = videos.map((video) =>{

        return <VideoItems
          key = {video.id.videoId}
           onVideoSelect={onVideoSelect} video = {video} />
   })
    
return (
    <div className= 'ui relaxed divided list'>
       {renderList} 
    </div>
  )
}

export default VideoLIst ;