import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import Youtube from './Apis/Youtube';
import VideoList from './Components/VideoList';


class App extends Component {

  state = {
    videos: [],
    selectedVideo:null
  }

  submitForm = async searchValue => {
    console.log(searchValue);
    const response = await Youtube.get('/search', {
      params: {
        q: searchValue
      }
    });
    this.setState({ videos: response.data.items });
 }

 selectedVideo = (video) =>{
    this.setState({
      selectedVideo:video
    })
 }


  render() {
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.submitForm} />
        <VideoList selectVideo={this.state.selectedVideo} selectedVideo={this.selectedVideo} videoList={this.state.videos}/>
       </div>
    );
  }
}

export default App;
