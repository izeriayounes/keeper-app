import React from "react";


import Delete from '@mui/icons-material/Delete';

function Note(props) {
  return props.updatedNotes.map((note) => (
    <div key={note.key} className="note">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button
        onClick={() => {
          props.onDelete(note.key);
        }}
      >
          <Delete></Delete>
      </button>
    </div>
  ));
}

export default Note;
