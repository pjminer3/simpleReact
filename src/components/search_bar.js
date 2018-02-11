import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  
  render() {
    return (
      // onChange (input), event.target.value, and value (input) is built into HTML and is part of javascript
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={(event) => {this.setState({term: event.target.value})}} 
        />
      </div>
    );
  }


}

export default SearchBar;
