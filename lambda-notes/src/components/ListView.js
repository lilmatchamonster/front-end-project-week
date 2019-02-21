import React, { Component } from 'react';

import Note from './Note';
import './compStyle.css';

class ListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 1
    }
  }

  pageChange = () => {
    let page = this.state.page;
    let count = 9;
    
    let end = page * count;
    let start = end - count;
    
    return [start, end]
  }

  next = () => {
    let count = this.state.page
    if(this.props.notes.length > 9*this.state.page){
      count ++
      this.setState({page: count})
    }
  }

  prev = () => {
    let count = this.state.page
    if((count*9 - 9) != 0){
      this.setState({page: count - 1})
    }
  }

  render(){
    return(
      <div className="list">
        <h2>Your Notes:</h2>
        <div className="holder">
          {this.props.notes.slice(this.pageChange()[0],this.pageChange()[1]).map(note => {
            return <Note key={note.id} note={note} viewCard={this.props.viewCard}/>})}
        </div>
        <div className="nav-div">
          <button className="nav-btn" onClick={() => this.prev()}>{"<<"} Previous</button>
          <p>~{this.state.page}~</p>
          <button className="nav-btn" onClick={() => this.next()}>Next {">>"}</button>
        </div>
      </div>
    );
  }
}

export default ListView;
