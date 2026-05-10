function EssaySection({ id, title, level = 2, children }) {
  const Heading = level >= 3 ? "h4" : "h3";

  return (
    <section id={id} className={`essay-section section-level-${level}`}>
      <div className="section-rule" aria-hidden="true" />
      <Heading>{title}</Heading>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default EssaySection;
