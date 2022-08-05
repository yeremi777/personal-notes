import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({
  title,
  date,
  body,
  id,
  onDelete,
  onArchive,
  archiveAction,
}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={date} body={body} />
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archiveAction={archiveAction}
      />
    </div>
  );
}

export default NoteItem;
