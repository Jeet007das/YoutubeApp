import React, { Component } from 'react';




const VideoPlayer = ({ videoId }) => {
    let videoSrc = `https://www.youtube.com/embed/${videoId}`
  return (
        <div >{
            
            (videoId != null) ? <div>
                <iframe width="560" height="315"
                     src={videoSrc}
                     frameborder="0" 
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                </div>:
                <div>
                    <h5>There is no video selected</h5>
            </div>
        }
            
        </div>
    )


}

export default VideoPlayer;