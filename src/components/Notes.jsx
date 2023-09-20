import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toggleImportanceOf } from '../reducers/noteReducer'

const Note = ({note, toggleImportance}) => {
    return (
        <li onClick={() => toggleImportance(note.id)} >
            {note.content} <strong>{note.important ? 'important': ''}</strong>
        </li>
    )
}

const Notes = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state)

    const toggleImportance = (id) => {
        dispatch(toggleImportanceOf(id))
    }

    return (
        <ul>{notes.map(note => <Note key={note.id} note={note} toggleImportance={toggleImportance} />)}</ul>
    )
}

export default Notes