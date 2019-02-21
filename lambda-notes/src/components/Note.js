import React from 'react';

import './compStyle.css';

const Note = props => {
  let size = () => {
    let maxLen = 130;
    if(props.note.textBody.length > maxLen){
      return props.note.textBody.slice(0,maxLen).concat('...');
    }
    else{
      return props.note.textBody
    }
  }

  return(
    <div className="note" onClick={() => props.viewCard(props.note._id)}>
      <h3>{props.note.title}</h3>
      <p>{size()}</p>
    </div>
  );
}

export default Note;