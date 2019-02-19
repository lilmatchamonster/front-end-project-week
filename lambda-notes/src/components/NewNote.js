import React, { Component } from 'react';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      note: {
        tags: [],
        title: "",
        textBody: ""
      }
    }
  }
  changeHandler = event => {
    event.preventDefault();

    this.setState({note: { ...this.state.note, 
      [event.target.name]: event.target.value}})
  }

  addNote = (e) => {
    e.preventDefault();
    
    this.props.postNote(this.state.note)
    this.setState({note: {title: "", textBody: "", _id: ""}})
  }

  render() { 
    return ( 
      <div className="create">
        <h2>Create New Note:</h2>
        <form onSubmit={this.addNote}>
          <input className="title" type="text" name="title" placeholder="Note Title" value={this.state.note.title} onChange={this.changeHandler}/>
          <input className="textBody" type="text" name="textBody" placeholder="Note Content" value={this.state.note.textBody} onChange={this.changeHandler}/>
          <input className="btn" type="submit" value="Save"/>
        </form>
      </div>
     );
  }
}
 
export default NewNote;