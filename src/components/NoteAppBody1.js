import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteAppBody1({ notes, addNote, onDelete, onArchive, searchedTitle, searchedNotes }) {
  let notesActive = null;
  let notesArchived = null;

  if (searchedTitle.length > 0) {
    notesActive = searchedNotes.filter((note) => note.archived === false);
    notesArchived = searchedNotes.filter((note) => note.archived === true);
  } else {
    notesActive = notes.filter((note) => note.archived === false);
    notesArchived = notes.filter((note) => note.archived === true);
  }
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      {notesActive.length !== 0 ? <NoteList notes={notesActive} onDelete={onDelete} onArchive={onArchive} /> : <div className="notes-list__empty-message">Tidak Ada Catatan.</div>}
      <h2>Arsip</h2>
      {notesArchived.length !== 0 ? <NoteList notes={notesArchived} onDelete={onDelete} onArchive={onArchive} /> : <div className="notes-list__empty-message">Tidak Ada Catatan.</div>}
    </div>
  );
}

export default NoteAppBody1;
