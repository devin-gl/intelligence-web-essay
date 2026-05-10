function MediaFigure({ src, alt, caption, source }) {
  return (
    <figure className="media-figure">
      <img src={src} alt={alt} />
      <figcaption>
        <span>{caption}</span>
        {source && <small>{source}</small>}
      </figcaption>
    </figure>
  );
}

export default MediaFigure;
