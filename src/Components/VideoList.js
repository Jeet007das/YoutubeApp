import React, { Component } from 'react';
import VideoItem from './VideoItem';
import './../StyleSheet/style.css';
import VideoPlayer from './VideoPlayer';





const VideoList = ({ videoList , selectedVideo, selectVideo }) => {
    const renderedList = (videoList).map((video) => {
       
        return <VideoItem video={video} selectedVideo={selectedVideo} />

    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-7 videoPlayer" >
                {
                        (selectVideo != null) ? <VideoPlayer videoId = {selectVideo.id.videoId}/> : <VideoPlayer videoId = {null} />
                }
                    
            </div>
                <div className="col-sm-12 col-md-6 col-lg-5 videoList px-0" >
                    {renderedList}
                </div>
            </div>
        </div>
    )


}

export default VideoList;