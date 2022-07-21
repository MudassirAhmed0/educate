import React from "react";
import video from "../../assets/video/video1.mp4";
import "./video.css"

const Video = () => {
  return (
    <section className="py-[50px] lg:py-[70px] bg-gray overflow-hidden">
      <div className="container h-[100%]">
        <div className="w-[100%] h-[100%] flex justify-center items-center">
          <iframe src="https://www.youtube.com/embed/tgxqmK2eoec?list=PLXyIamz14kHVYRPLqhQCbPEmnmZxQJ6iJ&autoplay=1&mute=1&loop=1" class="w-[100%] max-w-[1200px] h-[70vh] mx-auto rounded-[10px] drop-shadow-2xl" frameborder="0"></iframe>
          {/* <video
            src={video}
            controls
            autoPlay
            loop
            className="w-[100%] max-w-[1200px] mx-auto rounded-[10px] drop-shadow-2xl"
          ></video> */}
        </div>
      </div>
    </section>
  );
};

export default Video;
