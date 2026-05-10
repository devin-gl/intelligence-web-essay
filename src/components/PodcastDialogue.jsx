function PodcastDialogue({ transcript = [], activeIndex = null }) {
  return (
    <div className="podcast-dialogue">
      {transcript.map((line, index) => (
        <div
          className={`dialogue-line speaker-${index % 2 === 0 ? "a" : "b"} ${
            activeIndex === index ? "is-active" : ""
          }`}
          key={`${line.time}-${line.speaker}`}
        >
          <div className="dialogue-meta">
            <span>{line.speaker}</span>
            <time>{line.time}</time>
          </div>
          <p>{line.text}</p>
        </div>
      ))}
    </div>
  );
}

export default PodcastDialogue;
