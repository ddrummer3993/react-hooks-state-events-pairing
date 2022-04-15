import React, { useState } from "react";
import RenderComments from "./RenderComments";

function Comments({ videoData }) {
  
  const [viewComments, setViewComments] = useState(true);
  
  function handleClick () {
    setViewComments(!viewComments);
  }

  return(
    <div>
      <button onClick={handleClick}>{viewComments ? "Hide Comments" : "Show Comments"}</button>
      <h2>{videoData.comments.length} Comments</h2>
      {viewComments ? <RenderComments videoData={videoData}/> : null}
    </div>
  );
}

export default Comments;