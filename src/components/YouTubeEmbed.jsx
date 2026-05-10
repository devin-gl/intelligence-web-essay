function YouTubeEmbed({ videoId, title, caption }) {
  return (
    <figure className="youtube-figure">
      <div className="video-shell">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default YouTubeEmbed;
