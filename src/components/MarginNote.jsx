import { useState } from "react";

function MarginArtifact({ artifact }) {
  if (artifact.type === "image") {
    return (
      <figure className="margin-artifact margin-artifact-image">
        <img src={artifact.src} alt={artifact.alt || ""} />
        {artifact.caption && <figcaption>{artifact.caption}</figcaption>}
      </figure>
    );
  }

  if (artifact.type === "audio") {
    return (
      <div className="margin-artifact margin-artifact-audio">
        <span>{artifact.label || "Audio"}</span>
        <audio controls src={artifact.src} />
      </div>
    );
  }

  if (artifact.type === "quote") {
    return (
      <blockquote className="margin-artifact margin-artifact-quote">
        <p>{artifact.text}</p>
        {artifact.source && <cite>{artifact.source}</cite>}
      </blockquote>
    );
  }

  if (artifact.type === "comment") {
    return (
      <div className="margin-artifact margin-artifact-comment">
        {artifact.author && <strong>{artifact.author}</strong>}
        <p>{artifact.text}</p>
      </div>
    );
  }

  if (artifact.type === "link") {
    return (
      <p className="margin-artifact margin-artifact-link">
        <a href={artifact.href} target="_blank" rel="noreferrer">
          {artifact.label || artifact.href}
        </a>
      </p>
    );
  }

  return (
    <p className="margin-artifact margin-artifact-text">
      {artifact.text || artifact.body}
    </p>
  );
}

function MarginNote({ title, body, artifacts = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <aside className="margin-note">
      <button className="margin-note-toggle" onClick={() => setOpen((value) => !value)}>
        <span>{title}</span>
        <span aria-hidden="true">{open ? "-" : "+"}</span>
      </button>
      <div className={open ? "margin-note-body is-open" : "margin-note-body"}>
        <strong>{title}</strong>
        {body && <p>{body}</p>}
        {artifacts.map((artifact, index) => (
          <MarginArtifact artifact={artifact} key={`${artifact.type}-${index}`} />
        ))}
      </div>
    </aside>
  );
}

export default MarginNote;
