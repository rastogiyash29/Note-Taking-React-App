import React, { useState, useEffect } from 'react';
import Note from '../note/Note';

import './styles.scss';

const NotesContainer = () => {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes'))?JSON.parse(localStorage.getItem('notes')):[]);
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: '',
      content: '',
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const updateNote = (id, updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, ...updatedNote };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h2>My Notes</h2>
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            updateNote={updateNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
