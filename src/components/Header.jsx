import { useState } from "react"

function Header({notes,sortBy,setSortBy}) {
    // to save values gave from user as an input or option by onChange(event.target.value), we should use control component:
    // const [sortBy, setSortBy] = useState('')
    // But we should use this state at the parent component (App) because Header and NoteList are sibling, and we want to see effect of this component on NoteList component.

    return (
        <div className="note-header">
            <h1>My Notes({notes.length})</h1>
            <select onChange={(e) => setSortBy(e.target.value)}>
                <option value="latest">Sort based on latest note</option>
                <option value="earliest">Sort based on earliest note</option>
                <option value="completed">Sort based on completed note</option>
            </select>        
        </div>
    )
}

export default Header