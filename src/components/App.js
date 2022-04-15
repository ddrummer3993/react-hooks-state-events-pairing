import React from "react";
import video from "../data/video.js";
import Header from "./Header";
import Likes from "./Likes";
import Comments from "./Comments";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Header videoData={video}/>
      <Likes videoData={video}/>
      <Comments videoData={video}/>
    </div>
  );
}

export default App;
