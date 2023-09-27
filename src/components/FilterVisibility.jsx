import React from 'react'
import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const FilterVisibility = () => {
    const dispatch = useDispatch()

    const filterSelected = value => {
        console.log(value)
        
        dispatch(filterChange(value))
    }

    return (
        <div>
            all <input type="radio" name="filter" onChange={() => filterSelected("ALL")} />
            important <input type="radio" name="filter" onChange={() => filterSelected("IMPORTANT")} />
            nonimportant <input type="radio" name="filter" onChange={() => filterSelected("NONIMPORTANT")} />
        </div>
    )
}

export default FilterVisibility