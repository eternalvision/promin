import React, { useState, useEffect } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
// import track from "./For L (Tape Version).mp3";

function Footer() {
  //
  //   const [audioLists, setAudioLists] = useState([
  //   { musicSrc: '' },
  //   ])

  //   useEffect(() => {
  //   setTimeout(() => {
  //     setAudioLists([{ musicSrc: '' }])
  //   }, 1000)
  // }, [setAudioLists])

  return (
    <footer className="Footer">
      <ReactJkMusicPlayer
        autoPlay={true}
        audioLists={[{ src: "./ForLTapeVersion.mp3" }]}
        showMediaSession
        mode="full"
        showDestroy={false}
        toggleMode={false}
        showThemeSwitch={false}
        theme="light"
        showDownload={false}
      />
    </footer>
  );
}

export default Footer;
