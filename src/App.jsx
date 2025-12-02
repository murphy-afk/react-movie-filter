import { useState } from 'react'
import { movies } from './assets/movie-data'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [genre, setGenre] = useState('');
  return (
    <>
      <div className="container">
        <h1>Movies</h1>
        <label htmlFor="genre-select" className='form-label'>Filtra per genre</label>
        <select name="genre" id="genre-select" className='form-control' 
        onChange={(event) => setGenre(event.target.value)}>
          {movies.map((movie, index) =>
            <option value={movie.genre} key={index}>{movie.genre}</option>
          )}
        </select>
        <div className='movie-container'>
          {movies.map((movie, index) =>
            <p key={index}>{movie.title}</p>
          )}
        </div>

      </div>
    </>
  )
}

export default App
