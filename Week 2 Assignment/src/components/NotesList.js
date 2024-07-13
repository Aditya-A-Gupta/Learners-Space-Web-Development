import React from 'react';
import Note from './Note';

function NotesList({ notes, deleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <Note key={index} note={note} deleteNote={() => deleteNote(index)} />
      ))}
    </div>
  );
}

export default NotesList;
