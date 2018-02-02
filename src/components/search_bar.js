import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  
  render() {
    return (
      // onChange is built into HTML and is part of javascript, so is 'event.target.value'
      <div>
        <input onChange={(event) => {this.setState({term: event.target.value})}} />
      </div>
    );
  }


}

export default SearchBar;
