function PromptStudy({ title, description, items = [], closingQuestion }) {
  return (
    <div className="prompt-study">
      <div className="prompt-study-intro">
        <p className="eyebrow">Painting Study</p>
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>

      <div className="prompt-study-flow">
        {items.map((item, index) => (
          <article className={`prompt-study-card ${item.kind || "prompt"}`} key={`${item.title}-${index}`}>
            <div className="prompt-study-label">{item.title}</div>
            {item.text && <p>{item.text}</p>}
            {item.src && <img src={item.src} alt={item.alt || ""} />}
            {item.caption && <small>{item.caption}</small>}
          </article>
        ))}
      </div>

      {closingQuestion && <p className="prompt-study-question">{closingQuestion}</p>}
    </div>
  );
}

export default PromptStudy;
