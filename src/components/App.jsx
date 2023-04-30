import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./createArea";
import notesJS from "../notes";

function App() {
  const [notes, setNotes] = useState(notesJS);

  function submitNote(event, note) {
    event.preventDefault();
    setNotes((prevNotes) => [
      ...prevNotes,
      { key: notes.length + 1, title: note.title, content: note.content }
    ]);
  }

  function deleteNote(key) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.key !== key));
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={submitNote} />
      <Note updatedNotes={notes} onDelete={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
