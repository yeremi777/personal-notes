import React from "react";
import { getInitialData } from "../utils/data";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onSearchNoteHandler({ keyword }) {
    this.setState({ keyword });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);

    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const archives = this.state.notes
      .filter((note) => note.id === id)
      .map((note) => (note.archived = !note.archived));

    this.setState({ archives });
  }

  render() {
    const unarchivedNotes = this.state.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.state.keyword.toLowerCase()) &&
        note.archived === false
    );
    const archivedNotes = this.state.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.state.keyword.toLowerCase()) &&
        note.archived === true
    );

    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <NoteSearch searchNotes={this.onSearchNoteHandler} />
        </div>

        <div className="note-app__body">
          <div className="note-input">
            <h2>Create Note</h2>
            <NoteInput addNotes={this.onAddNoteHandler} />
          </div>

          <h2>Active Notes</h2>
          <NoteList
            notes={unarchivedNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            archiveAction={"Archive"}
          />
          <h2>Archived</h2>
          <NoteList
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            archiveAction={"Undo"}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
