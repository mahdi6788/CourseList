function NotesList({ notes, handleDelete, handleCheckBox, sortBy }) {

  // use sortedNotes as a coopy of notes to prevent from changing the state of notes. 
  //  also we use [...notes] as a clone of notes to prevent from mutating the notes.
  let sortedNotes = notes
  if (sortBy === "earliest"){
    sortedNotes = [...notes].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
    // a-b > 0 (a > b) ? 1 (replace with each other) : -1 (don't do anything)
  }

  if (sortBy === "latest"){
    sortedNotes = [...notes].sort((a,b) => new Date(b.createdAt)- new Date(a.createdAt))
    // b-a > 0 (b > a) ? 1 : -1
  }

  if(sortBy === "completed"){
    sortedNotes = [...notes].sort((a,b) => Number(a.completed) - Number(b.completed))
  }


  return (
    <div>
      {sortedNotes.map((note) => (   // use sortedNotes instead of notes
        <NoteItem
          note={note}
          key={note.id}
          handleDelete={handleDelete}
          handleCheckBox={handleCheckBox}
        />
      ))}
    </div>
  );
}

export default NotesList;

function NoteItem({ note, handleDelete, handleCheckBox }) {
  // format to display date
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.completed && "completed" }`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => handleDelete(note.id)}>X</button>
          <input onChange={() => handleCheckBox(note.id)} type="checkbox" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", option)}
      </div>
    </div>
  );
}
