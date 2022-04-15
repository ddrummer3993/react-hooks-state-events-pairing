import React, { useState } from "react";

function Likes({ videoData }) {
  const [upVotes, setUpVotes] = useState(videoData.upvotes)
  const [downVotes, setDownVotes] = useState(videoData.downvotes)
  
  function handleUpChange () {
    setUpVotes((upVotes) => upVotes + 1);
  };

  function handleDownChange () {
    setDownVotes((downVotes) => downVotes + 1);
  };

  return(
    <div>
      <button onClick={handleUpChange}>{upVotes} 👍</button>
      <button onClick={handleDownChange}>{downVotes} 👎</button>
    </div>
  )
};

export default Likes;