function ChapterHeader({ id, part, title, subtitle, background }) {
  return (
    <header id={id} className="chapter-header">
      <img className="chapter-backdrop" src={background} alt="" aria-hidden="true" />
      <div className="chapter-header-inner">
        <p className="part-label">{part}</p>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default ChapterHeader;
