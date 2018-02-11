import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCD2ygjUk6ZV5UjutyDaSOOOgEzfJa-L24';

// Create a new component. This component should create HTML
// This is done with the standard React library

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };


    this.videoSearch('surfboards');
  }

  videoSearch(term) {

    YTSearch({key: 'AIzaSyCD2ygjUk6ZV5UjutyDaSOOOgEzfJa-L24', term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
       });
    });

  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    )
  }
}

// Take created HTML and put it on the page (in the DOM)
// This is done with another library called ReactDOM
ReactDOM.render(<App />, document.querySelector('.container'));