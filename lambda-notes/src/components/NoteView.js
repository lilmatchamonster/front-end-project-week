import React from 'react';

const NoteView = props => {

console.log("NoteView", props.mynote)
  return( 
    <div className="noteView-header">
      <header>
        <div>
          <span onClick={() => props.edit(props.mynote)}>edit</span>
          <span>delete</span>
        </div>
        <h2>{props.mynote.title}</h2>
      </header>
      <div>
        <div className="noteView">
          {props.mynote.textBody}
        </div>
      </div>
    </div>
  );

}

export default NoteView;