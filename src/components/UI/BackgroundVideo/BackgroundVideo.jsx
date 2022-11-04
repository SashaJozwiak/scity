import React from "react";
import cl from "./BackgroundVideo.module.scss";
import bvideo from "./background.mp4";
import poster from "./poster.jpg";

const BackgroundVideo = () => {
  return (
    <div className={cl.videowrapper}>
    <video
      className={cl.backgroundVideo}
      autoPlay={true}
      loop={true}
      muted={true}
      poster={poster}
    >
      <source src={bvideo} />
    </video>
    </div>
  );
};

export default BackgroundVideo;
