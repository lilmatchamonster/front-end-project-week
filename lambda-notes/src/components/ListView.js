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

  render(){
    return(
      <div className="list">
        <h2>Your Notes:</h2>
        <div className="holder">
          {this.props.notes.slice(this.pageChange()[0],this.pageChange()[1]).map(note => {
            return <Note key={note.id} note={note} viewCard={this.props.viewCard}/>})}
        </div>
      </div>
    );
  }
}

export default ListView;
