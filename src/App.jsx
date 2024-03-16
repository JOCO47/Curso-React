import './App.css'
import { useEffect, useState } from 'react'
import MovieContainer from './components/MovieContainer/movieContainer'
import MovieCard from './components/MovieCard/MovieCard'

const ENDPOINT = 'http://api.themoviedb.org/3/discover/movie?api_key=3e1bff19feee5c5362dffc4a5112b26c&language=es&sort_by=popularity.desc'

function App() {

  const [movies, setMovies]=useState([]);
  const [favMovies, setFavMovies]=useState([]);

  useEffect ( ()=>{
      fetch(ENDPOINT)
        .then((res) => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
  }, [])

  return (
    <>
      <MovieContainer>
        {
          !movies.length ? 'Cargando Películas...' : movies.map( (movie) => <MovieCard movie={movie} isFav={false}/>)
        }
      </MovieContainer>
     </>
  )
}

export default App
