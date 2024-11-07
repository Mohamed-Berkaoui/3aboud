import React from 'react'
import MoviesContext from './MoviesContext'
import SeriesContext from './SeriesContext'

function IndexContext({children}) {
  return (
   <MoviesContext>
    <SeriesContext>
        {children}
    </SeriesContext>
   </MoviesContext>
  )
}

export default IndexContext