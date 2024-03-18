import './App.css'
import { useEffect, useState } from 'react'
import MovieContainer from './components/MovieContainer/movieContainer'
import MovieCard from './components/MovieCard/MovieCard'

const ENDPOINT = 'http://api.themoviedb.org/3/discover/movie?api_key=3e1bff19feee5c5362dffc4a5112b26c&language=es&sort_by=popularity.desc'

function App() {

  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies]=useState([]);

  useEffect ( ()=>{
      fetch(ENDPOINT)
        .then((res) => res.json())
        .then(data => setMovies(data.results))
        .catch(error => console.error(error))
  }, [])

  const toggleFav = (movie) => {
    const {id} = movie
    const IS_FAV = favMovies.find((movie) => movie.id === id)
    if(IS_FAV){
      const indexToRemove = favMovies.indexOf(IS_FAV)
      favMovies.splice(indexToRemove, 1)
      setFavMovies([...favMovies])
    }else{
      setFavMovies([...favMovies, movie])
    }    
  }

  const isFav = (id) => favMovies.find((movie) => movie.id === id)

  return (
    <>
      <MovieContainer>
        {
          !movies.length ? 'Cargando Películas...' : movies.map( (movie) => <MovieCard movie={movie} isFav={isFav} key={movie.id} toggleFav={toggleFav}/>)
        }
      </MovieContainer>
     </>
  )
}

export default App
