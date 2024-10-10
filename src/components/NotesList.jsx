function NotesList({notes}) {
    return (
        <div>
            {notes.map(note => <NoteItem note={note} key={note.id} />)}
        </div>
    )    
}

export default NotesList

function NoteItem({note}){
    // format to display date
    const option = {
        year:"numeric",
        month:"long",
        day:"numeric"
    }

    return (
    <div className="note-item">
        <div className="note-item__header">
            <div>
                <p className="title">{note.title}</p>
                <p className="desc">{note.description}</p>
            </div>
            <div className="actions">
                <button>X</button>
                <input type="checkbox" />
            </div>
        </div>
        <div className="note-item__footer">
            {new Date(note.createdAt).toLocaleDateString("en-US", option)}
        </div>
    </div>
    )
}