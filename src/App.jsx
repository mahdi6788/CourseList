import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

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

  return (
    <div className="component">
      <div className="note-header">
        <Header />
      </div>
      <div className="note-app">
        {/* These two components are sibling */}
        <AddNewNote onAddNote={handleAddNotes} />
        <div className="note-container">
          <NotesList
            notes={notes}
            handleDelete={handleDelete}
            handleCheckBox={handleCheckBox}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
