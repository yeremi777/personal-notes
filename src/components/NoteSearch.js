import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };

    this.onKeywordChangeEventHandler =
      this.onKeywordChangeEventHandler.bind(this);
  }

  onKeywordChangeEventHandler(event) {
    event.preventDefault();
    this.setState(
      () => {
        return {
          keyword: event.target.value,
        };
      },
      () => {
        this.props.searchNotes(this.state);
      }
    );
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="search"
          placeholder="Search notes ..."
          value={this.state.keyword}
          onChange={this.onKeywordChangeEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
