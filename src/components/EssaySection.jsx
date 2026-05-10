function EssaySection({ id, title, children }) {
  return (
    <section id={id} className="essay-section">
      <div className="section-rule" aria-hidden="true" />
      <h3>{title}</h3>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default EssaySection;
