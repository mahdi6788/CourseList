import "./App.css";
import Header from "./components/Header";


function App() {
  return (
    <div className="component">
      <div className="note-header"> <Header /> </div>
      <div className="note-app">
        <div className="add-new-note">AddNote</div>
        <div className="note-container">Notes</div>
      </div>


    </div>
  )
}

export default App;
