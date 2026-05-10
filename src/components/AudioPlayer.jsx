import { useEffect, useRef, useState } from "react";
import PodcastDialogue from "./PodcastDialogue.jsx";

function formatTime(value) {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function AudioPlayer({ src, title, description, transcript }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const onTime = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const seek = (event) => {
    const value = Number(event.target.value);
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="audio-copy">
        <p className="eyebrow">Audio Essay</p>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="audio-controls">
        <button className="round-button" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
          {playing ? "II" : "Play"}
        </button>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={seek}
          aria-label="Audio progress"
        />
        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
      <button className="text-button" onClick={() => setShowTranscript((value) => !value)}>
        {showTranscript ? "Hide transcript" : "Show transcript"}
      </button>
      {showTranscript && <PodcastDialogue transcript={transcript} activeIndex={playing ? 0 : null} />}
    </div>
  );
}

export default AudioPlayer;
