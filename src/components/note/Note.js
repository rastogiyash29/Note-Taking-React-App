import React, { useState } from 'react';

import './styles.scss';

const Note = ({ note, deleteNote, updateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState(note);

  const handleInputChange = (e) => {
    setUpdatedNote({
      ...updatedNote,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = () => {
    deleteNote && deleteNote(note.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateNote && updateNote(note.id, updatedNote);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <div className="note-edit">
          <input
            type="text"
            name="title"
            value={updatedNote.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <textarea
            name="content"
            value={updatedNote.content}
            onChange={handleInputChange}
            placeholder="Content"
          />
          <div className="note-edit-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="note-view">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div className="note-view-actions">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
