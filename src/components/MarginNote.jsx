import { useState } from "react";

function MarginNote({ title, body }) {
  const [open, setOpen] = useState(false);

  return (
    <aside className="margin-note">
      <button className="margin-note-toggle" onClick={() => setOpen((value) => !value)}>
        <span>{title}</span>
        <span aria-hidden="true">{open ? "-" : "+"}</span>
      </button>
      <div className={open ? "margin-note-body is-open" : "margin-note-body"}>
        <strong>{title}</strong>
        <p>{body}</p>
      </div>
    </aside>
  );
}

export default MarginNote;
