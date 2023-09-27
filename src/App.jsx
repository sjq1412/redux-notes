import React from 'react'  
import Notes from './components/Notes'
import NewNote from './components/NewNote'
import FilterVisibility from './components/FilterVisibility' 

const App = () => {  
    return (
        <div>
            <NewNote />
            <FilterVisibility />
            <Notes />
        </div>
    )
}

export default App