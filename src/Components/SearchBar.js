import React, { Component } from 'react';
import './../StyleSheet/style.css';

class SearchBar extends Component {
    state = {
        searchValue:''
    }

    searchVideos = (event) =>{
        event.preventDefault()
        this.props.onFormSubmit(this.state.searchValue)
    }

    
    render() {
      return (
          <div className="searchApp">
              <form onSubmit = {this.searchVideos}>
                  <div className="form-group">
                      <label className="label">Search Videos: </label>
                      <input 
                         type="text" 
                         className="input_bar" 
                         placeholder="Search videos" 
                         name="search" 
                         value = {this.state.searchValue}
                         onChange = {(event) => this.setState({searchValue:event.target.value})}/>
                        <button 
                            type="button" 
                            className="btn btn-primary searchBtn"
                            onClick = {this.searchVideos}>
                             <i className="fa fa-search searchIcon" />
                        </button>
                        
                </div>
              </form>
          </div>
      );
    }
  }
  
  export default SearchBar;