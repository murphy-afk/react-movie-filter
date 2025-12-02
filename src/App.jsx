import { useEffect, useState } from 'react'
import { movieList } from './assets/movie-data'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'




function App() {
  const [genre, setGenre] = useState('');
  const [movies, setMovies] = useState(movieList);
  const [movieNum, setMovieNum] = useState(1);
  useEffect(() => {
    console.log("I'm happening");
    const filteredMovies = movieList.filter(movie => movie.genre === genre);
    setMovies(filteredMovies);
    setMovieNum(filteredMovies.length);
    if (genre === '') {
      setMovies(movieList)
    }
  }, [genre])

  return (
    <>
      <div className="container w-75 border my-4 card bg-info-subtle">
        <h1 className='text-center py-3'>Movies</h1>
        <div className="form-floating">
          <select name="genre" id="genre-select" className='form-select' aria-label='Filtra per genre'
            onChange={(event) => { setGenre(event.target.value) }}>
            {movieList.map((movie, index) =>
              <option value={movie.genre} key={index}>{movie.genre}</option>
            )}
          </select>
          <label htmlFor="genre-select">Filtra per genre</label>
        </div>
        <div className='movie-container mt-5'>
          {genre != '' && <p className='border-bottom border-dark'>Film trovati: {movieNum}</p>}
          {movies.map((movie, index) =>
            <p key={index}>{movie.title}</p>
          )}
        </div>

      </div>
    </>
  )
}

export default App
