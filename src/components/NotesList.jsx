function NotesList({ notes, handleDelete, handleCheckBox }) {
  return (
    <div>
      {notes.map((note) => (
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
