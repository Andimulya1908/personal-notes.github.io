import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      titleChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (this.state.titleChar > 0) {
      this.setState((s) => {
        return {
          title: event.target.value,
          titleChar: s.titleChar - 1,
        };
      });
    }
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
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        titleChar: 50,
      };
    });

    const message = "Catatan berhasil ditambahkan";

    alert(message);
  }

  render() {
    return (
      <div className="note-input">
        <h1>Buat Catatan</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa Karakter: {this.state.titleChar}</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className="note-input__body" type="text" placeholder="Tuliskan Catatanmu di sini ..." required value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
