import React, { useState } from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

function Footer() {
  //
  const [audioLists] = useState([
    {
      cover: "https://res.cloudinary.com/dhnbm273t/image/upload/v1666881686/forlSymphoCat_uwzboa.jpg",
      name: "For L Tape Version",
      singer: "SymphoCat",
      musicSrc: "https://res.cloudinary.com/dhnbm273t/video/upload/v1666881275/For_L_Tape_Version_cgl5tj.mp3",
      volume: 10,
    },
  ]);

  return (
    <footer className="Footer">
      <ReactJkMusicPlayer
        audioLists={audioLists}
        autoPlay={false}
        showMediaSession
        mode="full"
        showDestroy={false}
        toggleMode={false}
        showThemeSwitch={false}
        theme="light"
        showDownload={false}
        volume={23}
      />
    </footer>
  );
}

export default Footer;
