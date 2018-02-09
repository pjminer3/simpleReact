import React from 'react';

const VideoList = (props) => {
  return (
    // in BootStrap we use 'className' instead of 'class'
    <ul className="col-md-4 list-group">
      <li>Hello</li>
      <li>{props.videos.length}</li>
    </ul>
  );
};

export default VideoList;
