import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCD2ygjUk6ZV5UjutyDaSOOOgEzfJa-L24';

// Create a new component. This component should create HTML
// This is done with the standard React library

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos, err) => {
      if (err) {
        throw err;
      } else {
        this.setState({videos})
        console.log(this.state.videos);
      }
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

// Take created HTML and put it on the page (in the DOM)
// This is done with another library called ReactDOM
ReactDOM.render(<App />, document.querySelector('.container'));