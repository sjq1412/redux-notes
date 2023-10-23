import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toggleImportanceOf } from '../reducers/noteReducer'
import noteService from "../services/notes"

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
        const updatedNote = await noteService.updateOne(id, {...noteToChange, important: !noteToChange.important})
        console.log({updatedNote})
        dispatch(toggleImportanceOf(updatedNote.id))
    }

    return (
        <ul>{filteredNotes.map(note => <Note key={note.id} note={note} toggleImportance={toggleImportance} />)}</ul>
    )
}

export default Notes