function AddNewNote(){
    const handleSubmit = (event) => {
        event.preventDefault()
    }


    return (
        <div className="add-new-note">
            <h2>Add New Note</h2>
            <form className="note-form" onSubmit={handleSubmit}>
                <input type="text" className="text-field" placeholder="Note Title"/>
                <input type="text" className="text-field" placeholder="Note Description"/>
                <button type="submit" className="btn btn--primary">Add New Note</button>
            </form>
        </div>
    )
}

export default AddNewNote