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
      this.setState({display: 0})
    })
    .catch(error => {
      console.log(error);
    })
  }

  updateNote = (note, id) => {
    Axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })
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
      return <NoteView mynote={cat[0]} edit={this.edit}/>
    }
    else if(this.state.display === 2 || this.state.display === 4 ){
      return <NewNote postNote={this.postNote}/>
    }
    else if(this.state.display === 3){
      return <EditNote editNote={this.state.edit}/>
    }
  }


  render() {
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
