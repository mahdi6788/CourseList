import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NotesList from "./components/NotesList";


function App() {
  // 
  const [notes, setNotes] = useState([])
  const handleAddNotes = (newNote) => {
    setNotes(prevNotes => [...prevNotes, newNote])
  }

  return (
    <div className="component">
      <div className="note-header"> <Header /> </div>
      <div className="note-app">
        {/* These two components are sibling */}
        <AddNewNote onAddNote={handleAddNotes}/>
        <div className="note-container">
          <NotesList notes={notes}/>
        </div>
      </div>


    </div>
  )
}

export default App;
