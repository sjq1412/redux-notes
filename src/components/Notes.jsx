import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateNote } from '../reducers/noteReducer' 

const Note = ({note, toggleImportance}) => {
    return (
        <li onClick={() => toggleImportance(note.id)} >
            {note.content} <strong>{note.important ? 'important': ''}</strong>
        </li>
    )
}

const Notes = () => {
    const dispatch = useDispatch()
    const notes = useSelector(({notes}) => notes)
    const filter = useSelector(({filter}) => filter)

    const filteredNotes = filter === "ALL" ? notes : notes.filter(note => filter === "IMPORTANT" ? note.important : !note.important)

    const toggleImportance = async (id) => {
        const noteToChange = notes.find(note => note.id === id)
        dispatch(updateNote(noteToChange))
    }

    return (
        <ul>{filteredNotes.map(note => <Note key={note.id} note={note} toggleImportance={toggleImportance} />)}</ul>
    )
}

export default Notes