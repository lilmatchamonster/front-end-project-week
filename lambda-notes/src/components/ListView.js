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

// Need to reoganize so that listView component is separate so the title info can be handled separately.
// currently the title is static. This is very bad!

//  {this.state.notes.slice(this.pageChange()[0],this.pageChange()[1]).map(note => {
//             return <Note textBody={note.textBody} title={note.title} key={note.id}/>
//           })} 


// show = () => {
//   if(this.state.display === 0){
//     return (this.state.notes.slice(this.pageChange()[0],this.pageChange()[1]).map(note => {
//       return <Note key={note.id} note={note} viewCard={this.viewCard}/>}))
//   }
//   else if(this.state.display === 1){
//     let cat = this.state.notes.filter(note => {
//       if(note._id === this.state.id){
//         return note
//       }
//     })
//     return <NoteView mynote={cat} />
//   }
// }