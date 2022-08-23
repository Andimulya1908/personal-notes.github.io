import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({ searchTitle, onSearchChange }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch searchTitle={searchTitle} onSearchChange={onSearchChange} />
    </div>
  );
}

export default NoteAppHeader;
