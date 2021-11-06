import video from "../data/video.js";
import React, {useState} from 'react';
import VideoBox from "./VideoBox.js";
import CommentsSect from "./CommentsSect.js";

function App() {
  console.log("Here's your data:", video)
  const {comments} = video
  console.log(comments)

  return (
    <div className="App">
      <VideoBox vidData={video}/>
      <CommentsSect commentsData={comments}/>
    </div>
  );
}

export default App;
