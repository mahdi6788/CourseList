import Message from "./Message"

function NoteStatus({notes}){
    // here we can calculate required data from available state, so we do not need to create new state for this variable data
    const allNotes = notes.length
    const completedNotes = notes.filter(note => note.completed === true).length
    const openNotes = allNotes - completedNotes

    // conditional rendering
    if (!allNotes) return  <Message>No note to show</Message>   
    // text inside the tag is children defined in message component


    return (
        <ul className="note-status">
            <li>
                All <span className="span">{allNotes}</span>
            </li>
            <li>
                Completed <span className="span">{completedNotes}</span>
            </li>
            <li>
                Open <span className="span">{openNotes}</span>
            </li>
        </ul>
    )
}

export default NoteStatus