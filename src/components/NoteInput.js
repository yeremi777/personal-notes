import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      characterLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length > 50) {
      return;
    }

    this.setState(() => {
      return {
        title: event.target.value,
        characterLimit: 50 - event.target.value.length,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        characterLimit: 50,
      };
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          Characters remaining : {this.state.characterLimit}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Title of notes ..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Description of notes ..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default NoteInput;
