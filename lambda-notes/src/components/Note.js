import React from 'react';

import './compStyle.css';

const Note = props => {
  return(
    <div className="note" onClick={() => props.viewCard(props.note._id)}>
      <h3>{props.note.title}</h3>
      <p>{props.note.textBody}</p>
    </div>
  );
}

export default Note;