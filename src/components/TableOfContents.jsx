import { useState } from "react";

function TableOfContents({ items, theme, onThemeChange }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={open ? "toc is-open" : "toc"} aria-label="Contents">
      <div className="toc-topline">
        <a href="#essay-title" className="toc-brand">
          Intelligence
        </a>
        <button className="toc-menu-button" onClick={() => setOpen((value) => !value)}>
          Contents
        </button>
      </div>
      <div className="toc-panel">
        <div className="toc-actions">
          <span>Contents</span>
          <button onClick={onThemeChange}>{theme === "dark" ? "Light" : "Dark"}</button>
        </div>
        <ol>
          {items.map((item) => (
            <li key={item.id} className={item.type}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export default TableOfContents;
