import React from "react"

function RenderComments({ videoData }) {
  return(
    <div>
      {videoData.comments.map(comment => (
        <div key={comment.id}>
          <h3>{comment.user}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  )
};

export default RenderComments;