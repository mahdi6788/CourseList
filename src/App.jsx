import "./App.css";
import { useReducer, useState } from "react";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import NoteStatus from "./components/NoteStatus";

function noteReducer(notes, {type, payload}) {
  switch (type) {
    case "add": {
      return [...notes, payload];
    }
    case "delete": {
      return notes.filter((note) => note.id !== payload);
    }
    case "complete": {
      return notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note
      );
    }
    default: throw new Error ("Unknown error" + type)
  }
}

function App() {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(noteReducer, []);

  const handleAddNotes = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    dispatch({ type: "add", payload: newNote });
  };
  const handleDelete = (id) => {
    // const filtered = notes.filter((note) => note.id !== id);
    // setNotes(filtered);
    dispatch({ type: "delete", payload: id });
  };
  const handleCheckBox = (id) => {
    // setNotes((prev) =>
    //   prev.map((note) =>
    //     note.id === id ? { ...note, completed: !note.completed } : note
    //   )
    // );
    dispatch({ type: "complete", payload: id });
  };
  // to sort notes
  const [sortBy, setSortBy] = useState("");

  return (
    <div className="component">
      <Header notes={notes} setSortBy={setSortBy} sortBy={sortBy} />
      <div className="note-app">
        {/* These two components are sibling */}
        <AddNewNote onAddNote={handleAddNotes} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NotesList
            notes={notes}
            handleDelete={handleDelete}
            handleCheckBox={handleCheckBox}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
