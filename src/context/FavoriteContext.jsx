import { type } from '@testing-library/user-event/dist/type'
import React, { createContext } from 'react'
export const favoriteStore=createContext()
function reducer(state,action){
    switch(action.type){
        case "ADDTOFAV": 
        return [...state, action.payload]
        case "DELETE":
            return [state.filter(movie=>movie.title!==action.payload)]
        default: return state
    }
}
export const addaction=function(param){
    return {type:"ADDTOFAV",payload:param}
}
function FavoriteContext() {
    
  return (
    <div>

    </div>
  )
}

export default FavoriteContext