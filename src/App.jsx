import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";


function App() {
  return (
    <div className="component">
      <div className="note-header"> <Header /> </div>
      <div className="note-app">
        <AddNewNote />
        <div className="note-container">Notes</div>
      </div>


    </div>
  )
}

export default App;
