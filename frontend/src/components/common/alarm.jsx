// import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import video1 from "../../Archive/Tate1.mp4"
import video2 from "../../Archive/Tate2.mp4"
import video3 from "../../Archive/Tate3.mp4"

const videos=[
    video1, video2, video3
]

const random = Math.floor((Math.random() * videos.length) + 1);

function Alarm({alarmDisplay}){
    const videoRef = useRef(null);

    const handlePlay = () => {
      if (videoRef.current) {
        videoRef.current.play()
          .then(() => {
            // Video started playing
          })
          .catch(error => {
            // Handle the error if the video cannot be played
            console.error('Failed to play the video:', error);
          });
      }
    };

    // const closeVideo = () => {
    //     setAlarm("none")
    // }

    console.log(random)
    return(
        alarmDisplay ?
            <video id="video" style={{display: alarmDisplay}} ref={videoRef} onClick={handlePlay} loop={true}>
                <source src={videos[random]} type="video/mp4"/>
                Your browser does not support the HTML video tag \
            </video>:<></>
    )
}

export default Alarm
/* <button className="video-close nes-btn is-error" onClick={closeVideo}> close </button> */