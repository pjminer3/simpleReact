import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should create HTML
// This is done with the standard React library
const App = () => {
  return <div>Hi!</div>;
}

// Take created HTML and put it on the page (in the DOM)
// This is done with another library called ReactDOM
ReactDOM.render(<App />, document.querySelector('.container'));