import React from "react";
import NoteItemContent from "./NoteItemContent";
// import DeleteButton from "./DeleteButton";
// import ArchiveButton from "./ArchiveButton";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ title, createdAt, body, id, onDelete, onArchive, notes }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={createdAt} body={body} />
      <NoteItemAction notes={notes} id={id} onDelete={onDelete} onArchive={onArchive} />
      {/* <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} /> */}
    </div>
  );
}

export default NoteItem;
