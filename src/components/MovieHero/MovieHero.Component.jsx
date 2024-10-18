import React, { useContext } from 'react'
import {MovieContext} from '../../context/Movie.context'

const MovieHero = () => {
    const {movie} = useContext(MovieContext); 
    const genres = movie.genres?.map(({name}) => name);
    console.log(genres);


  return (
    <div>MovieHero.Component</div>
  )
}

export default MovieHero