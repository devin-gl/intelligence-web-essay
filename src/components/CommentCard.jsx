function CommentCard({ name, meta, text }) {
  return (
    <article className="comment-card">
      <div className="comment-card-top">
        <span className="avatar" aria-hidden="true">
          {name.slice(0, 1).toUpperCase()}
        </span>
        <div>
          <h4>{name}</h4>
          <p>{meta}</p>
        </div>
      </div>
      <p>{text}</p>
    </article>
  );
}

export default CommentCard;
