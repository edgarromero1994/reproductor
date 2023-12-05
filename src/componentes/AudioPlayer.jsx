import React, { useRef, useState } from 'react';
import Player from "@madzadev/audio-player";
const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

const AudioPlayer = () => {
  const playerRef = useRef();

  const handlePlay = () => {
    // Obtener la referencia al reproductor y llamar a la función play
    playerRef.current.play();
  };
  return (
    <div>
      <button onClick={handlePlay}></button>
      <Player
        ref={playerRef}
        trackList={tracks}
      />
    </div>
  )
}

export default AudioPlayer