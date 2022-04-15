import React from "react";

function Header({ videoData }) {
  return(
    <div>
      <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{videoData.title}</h1>
      <p>{videoData.views} Views | Uploaded {videoData.createdAt}</p>
    </div>
  )
};

export default Header;