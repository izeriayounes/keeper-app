import { useState } from "react";
import Add from '@mui/icons-material/Add';


export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function writeNote(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={writeNote}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={writeNote}
          value={note.content}
        />
        <button
          onClick={(event) => {
            props.onAdd(event, note);
            setNote({ title: "", content: "" });
          }}
        >
          <Add></Add>
        </button>
      </form>
    </div>
  );
}
