import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class NoteView extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  open = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  render(){console.log("NoteView", this.props.mynote)
    return( 
      <div className="noteView-header">
        <header>
          <div>
            <span onClick={() => this.props.edit(this.props.mynote)}>edit</span>
            <span onClick={this.open}>delete</span>
            <Dialog className="dialog-box" open={this.state.open} onClose={this.close} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
              <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this note?"}</DialogTitle>
              <DialogContent>
                <DialogActions>
                  <button className="del-btn" onClick={() => this.props.deleteNote(this.props.mynote._id)}>
                    Delete
                  </button>
                  <button className="no-btn" onClick={this.close} autoFocus>
                    No
                  </button>
                </DialogActions>
              </DialogContent>
            </Dialog>
          </div>
          <h2>{this.props.mynote.title}</h2>
        </header>
        <div>
          <div className="noteView">
            {this.props.mynote.textBody}
          </div>
        </div>
      </div>
    );
  }
}

export default NoteView;
