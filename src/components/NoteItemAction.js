import React from "react";

function NoteItemAction({ notes, id, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button className="note-item__archive-button" onClick={() => onArchive(id)}>
        {notes.archived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}

export default NoteItemAction;
