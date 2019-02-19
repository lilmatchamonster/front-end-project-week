import React, { Component } from 'react';

import 'compStyle.css';

class CreateNote extends Component{
  constructor(){
    super();
    this.state = {
      title: "",
      content: ""
    }
    
    changleHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    submit = (e) => {
      //used date() to generate id/key
      console.log(e);
      this.setState({
        title: "",
        content: ""
      })
    }

    render(){
      return(
        <div className="edit">
          <h2>Create New Note:</h2>
          <form onSubmit={this.submit}>
            <input className="titleInput" type="text" name="title" placeholder="Note Title" value={this.state.title} onChange={this.changleHandler}></input>
            <input className="contentInput" type="text" name="content" placeholder="Note Content" value={this.state.content} onChange={this.changleHandler}></input>
            <button type="submit">Save</button>
          </form>
        </div>
      );
    }
  }
}

export default CreateNote;