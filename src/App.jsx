import React, {useEffect} from 'react'  
import { useDispatch } from 'react-redux'

import { initializeNotes  } from './reducers/noteReducer'

import Notes from './components/Notes'
import NewNote from './components/NewNote'
import FilterVisibility from './components/FilterVisibility' 


const App = () => {  
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeNotes())
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