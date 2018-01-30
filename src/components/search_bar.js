import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class SearchBar extends Component {
  render() {
    return (
      // onChange is built into HTML and is part of javascript
      <input onChange={(event) => { console.log(event.target.value) }} />
    );
  }


}

export default SearchBar;