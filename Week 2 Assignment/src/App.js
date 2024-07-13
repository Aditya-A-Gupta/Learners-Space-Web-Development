import React, { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';
import ToggleSwitch from './components/ToggleSwitch';
import './styles.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) setNotes(savedNotes);

    const savedTheme = JSON.parse(localStorage.getItem('isDarkMode'));
    if (savedTheme !== null) setIsDarkMode(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((note, i) => i !== index);
    setNotes(newNotes);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <h1>Google Keep</h1>
        <ToggleSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <NoteForm addNote={addNote} />
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;

