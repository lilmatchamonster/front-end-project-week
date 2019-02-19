import React from 'react';

import './compStyle.css';

const SideBar = props => {
  console.log(props)
  return(
    <div className="side">
      <h1>Lambda Notes</h1>
      <button onClick={() => props.home()}>View Your Notes</button>
      <button onClick={() => props.createNote()}>+ Create New Note</button>
    </div>
  );
}

export default SideBar;