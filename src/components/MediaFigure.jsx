function MediaFigure({ src, alt, caption, source, href }) {
  const image = <img src={src} alt={alt} />;

  return (
    <figure className="media-figure">
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {image}
        </a>
      ) : (
        image
      )}
      <figcaption>
        <span>{caption}</span>
        {source && <small>{source}</small>}
      </figcaption>
    </figure>
  );
}

export default MediaFigure;
