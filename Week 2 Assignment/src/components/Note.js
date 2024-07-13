import React from 'react';

function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
}

export default Note;
