import { createSlice } from "@reduxjs/toolkit"

import noteService from "../services/notes"

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    toggleImportanceOf(state, action) {
      const id = action.payload

      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      
      return state.map(note => note.id === id ? changedNote : note)
    },
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action) {
      return action.payload
    }
  }
})

export const { toggleImportanceOf, appendNote, setNotes} = noteSlice.actions

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
}

export const createNote = (content) => {
  return async (dispatch) => {
    const note = await noteService.createNew(content)
    dispatch(appendNote(note))
  }
}

export const updateNote = (note) => {
  return async (dispatch) => {
    const updatedNote = await noteService.updateOne(note.id, {...note, important: !note.important})
      dispatch(toggleImportanceOf(updatedNote.id))
  }
}

export default noteSlice.reducer