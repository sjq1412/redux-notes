import React from 'react'
import { createStore } from 'redux'

const noteReducer = (state = [], action) => {
  if (action.type === 'NEW_NOTE') {
    state.push(action.payload)
    return state
  }
  return state
}

const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NODE',
  payload: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})

console.log(store.getState())

const App = () => {
  return (
    <div>
      <ul>
        {store.getState().map(note => <li key={note.id}>
          {note.content} <strong>{note.important ? 'important': ''}</strong>
        </li>)}
      </ul>
    </div>
  )
}

export default App