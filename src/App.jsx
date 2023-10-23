import React, {useEffect} from 'react'  
import { useDispatch } from 'react-redux'

import noteService from "./services/notes"
import { setNotes } from './reducers/noteReducer'

import Notes from './components/Notes'
import NewNote from './components/NewNote'
import FilterVisibility from './components/FilterVisibility' 


const App = () => {  
    const dispatch = useDispatch()

    useEffect(() => {
        noteService.getAll().then(notes => dispatch(setNotes(notes)))
    }, [])

    return (
        <div>
            <NewNote />
            <FilterVisibility />
            <Notes />
        </div>
    )
}

export default App