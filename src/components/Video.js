import React from "react";

function Video({ src, title }) {

  return (
    <iframe
      src={src}
      frameborder='0'
      allow='autoplay; encrypted-media'
      allowfullscreen="true"
      title={title}
            >
    </iframe>
  )
}

export default Video;
