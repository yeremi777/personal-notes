import React from "react";
import { showFormattedDate } from "../utils/data";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, archiveAction }) {
  return notes.length !== 0 ? (
    <div className="notes-list">
      {notes.map((note) => {
        note["date"] = showFormattedDate(note["createdAt"]);
        return (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            archiveAction={archiveAction}
            {...note}
          />
        );
      })}
    </div>
  ) : (
    <p className="notes-list__empty-message">No notes</p>
  );
}

export default NoteList;
