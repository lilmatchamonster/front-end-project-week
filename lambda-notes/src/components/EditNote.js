import React, { Component } from 'react';

class EditNote extends Component {
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
  componentDidMount(){
    this.setState({note: this.props.editNote})
    
  }
  changeHandler = event => {
    event.preventDefault();

    this.setState({note: {...this.state.note, [event.target.name]: event.target.value}})
  }

  addNote = (e) => {
    e.preventDefault();
    
    this.props.updateNote(this.state.note, this.state.note._id)
    this.setState({note: {title: "", textBody: "", _id: ""}})
  }

  render() {
    return ( 
      <div className="create">
        <h2>Edit Note:</h2>
        <form onSubmit={this.addNote}>
          <input className="title" type="text" name="title" value={this.state.note.title} onChange={this.changeHandler}/>
          <textarea className="textBody" type="text" name="textBody" value={this.state.note.textBody} onChange={this.changeHandler}/>
          <input className="btn" type="submit" value="Update"/>
        </form>
      </div>
     );
  }
}
 
export default EditNote;