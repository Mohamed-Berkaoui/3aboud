import React, { useContext } from 'react'
import { moviesStore } from '../context/MoviesContext'
import Box from '../components/Box'
import { seriesStore } from '../context/SeriesContext'

function Home() {
    const movies=useContext(moviesStore)
    const seires=useContext(seriesStore)
  return (
    <div>
        <h1> best movies</h1>
        <div  style={{display:"flex",gap:"30px",flexWrap:"wrap"}}>
            {movies.slice(0,4).map(movie=><Box key={movie.id} element={movie}/>)}
        </div>
        <h1> best series</h1>
        <div  style={{display:"flex",gap:"30px",flexWrap:"wrap"}}>
            {seires.slice(0,4).map(movie=><Box key={movie.id} element={movie}/>)}
        </div>
    </div>
  )
}

export default Home