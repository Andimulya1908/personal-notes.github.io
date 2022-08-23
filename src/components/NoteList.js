import React from "react";
import NoteItem from "./NoteItem";

class NoteList extends React.Component {
  render() {
    const { notes, onDelete, onArchive } = this.props;

    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem notes={note} key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
        ))}
      </div>
    );
  }
}

export default NoteList;
