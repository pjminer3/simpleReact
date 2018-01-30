import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';



const API_KEY = 'AIzaSyCD2ygjUk6ZV5UjutyDaSOOOgEzfJa-L24';

// Create a new component. This component should create HTML
// This is done with the standard React library
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take created HTML and put it on the page (in the DOM)
// This is done with another library called ReactDOM
ReactDOM.render(<App />, document.querySelector('.container'));