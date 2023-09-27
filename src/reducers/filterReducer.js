const filterReducer = (state = "ALL", action) => {
    console.log({action})

    if (action.type === "FILTER") {
        return action.payload
    }
    return state
}
  
export const filterChange = filter => {
    return {
        type: "FILTER",
        payload: filter
    }
}
  
export default filterReducer