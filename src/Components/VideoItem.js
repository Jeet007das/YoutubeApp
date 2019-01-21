import React, { Component } from 'react';
import './../StyleSheet/style.css';



const VideoItem = ({ video, selectedVideo }) => {
     return (
        <div onClick = {() => selectedVideo(video)} className = "cardDetails">
            <div className="card mb-3" >
                <div className="row m-0 d-flex align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-5  px-0" >
                        <img src={video.snippet.thumbnails.medium.url} className="card-img" alt="..." />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-7 pr-0" >
                        <div className="card-body">
                            <h6 className="card-title">{video.snippet.title}</h6>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default VideoItem;