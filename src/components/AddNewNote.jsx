import { useState } from "react";

function AddNewNote({setNotes}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //   using onSubmit is better than onClick on button, because we can push enter button and click on button as well.
  const handleSubmit = (event) => {
    // to prevent from refreshing the page
    event.preventDefault();
    // 
    if (!title || !description) return null
    // to store note in an object and for future usage
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    // to make the input empty and ready for another note
    setTitle("");
    setDescription("");
    setNotes(prevNotes => [...prevNotes, newNote])

  };

  //   next step: updating the existing notes

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field"
          placeholder="Note Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          className="text-field"
          placeholder="Note Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
