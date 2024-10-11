import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import NoteStatus from "./components/NoteStatus";

function App() {
  //
  const [notes, setNotes] = useState([]);
  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDelete = (id) => {
    const filtered = notes.filter((note) => note.id !== id);
    setNotes(filtered);
  };
  const handleCheckBox = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };
  // to sort notes
  const [sortBy, setSortBy] = useState("");

  return (
    <div className="component">
      <Header notes={notes} setSortBy={setSortBy} sortBy={sortBy}/>
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
