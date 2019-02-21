import React, { Component } from 'react';
import Axios from 'axios';

import SideBar from './components/SideBar';
import NoteView from './components/NoteView';
import ListView from './components/ListView';
import NewNote from './components/NewNote';
import EditNote from './components/EditNote';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [],
      display: 0,
      id: 0,
      edit: {}
    }
  }

  componentDidMount(){
    Axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      console.log("Respone: ", response.data)
      this.setState({notes: response.data})
    })
    .catch(error => {
      console.log("Error: ", error)
    })
  }

  postNote = (note) => {
    Axios.post('https://fe-notes.herokuapp.com/note/create', note)
    .then(response =>{
      console.log(response)
      note._id = response.data.success;
      this.setState({display: 0, notes: [...this.state.notes, note]})
    })
    .catch(error => {
      console.log(error);
    })
  }

  updateNote = (note, id) => {
    Axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then(response => {
      console.log("this is the response: ", response)
      let updatedState = this.state.notes.slice();
       updatedState.forEach(updated => {
        if(updated._id === id){
          updated.title = note.title
          updated.textBody = note.textBody
        }
      })
      this.setState({display: 0, notes: updatedState})
    })
    .catch(error => {
      console.log(error);
    })
  }

  deleteNote = (id) => {
    Axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      console.log(response)
      let removed = this.state.notes.filter(updated => {
        if(updated._id !== id){
          return updated
        }
      })
      this.setState({display: 0, notes: removed})
    })
    .catch(error => {
      console.log(error);
    })
    console.log("this note was deleted!!")
  }

  // Set Conditionals-------------------------------|
  viewCard = (id) => {
    console.log(id)
    if(this.state.display === 0){
      this.setState({display: 1, id: id})
    }
    else{
      return null
    }
  }
  home = () => {
    if(this.state.display !== 0){
      this.setState({display: 0, id: 0})
    }
    else{
      return null
    }
  }
  createNote = () => {
    if(this.state.display !== 2){
      this.setState({display: 2, id: 0})
    }
    else{
      return null
    }
  }
  edit = (note) => {
    console.log("This is the note to be edited: ", note)
    this.setState({display: 3, id: 0, edit: note})
  }

  // Display Switch-----------------------------|
  show = () => {
    if(this.state.display === 0){
      return <ListView notes={this.state.notes} viewCard={this.viewCard}/>
    }
    else if(this.state.display === 1){
      let cat = this.state.notes.filter(note => {
        if(note._id === this.state.id){
          return note
        }
      })
      return <NoteView mynote={cat[0]} edit={this.edit} deleteNote={this.deleteNote}/>
    }
    else if(this.state.display === 2){
      return <NewNote postNote={this.postNote}/>
    }
    else if(this.state.display === 3){
      return <EditNote editNote={this.state.edit} updateNote={this.updateNote}/>
    }
  }


  render() { console.log(this.state.notes)
    return (
      <div className="App">
        <SideBar home={this.home} createNote={this.createNote}/>
        <div className="holder">
          {this.show()}
        </div>
      </div>
    );
  }
}

export default App;
