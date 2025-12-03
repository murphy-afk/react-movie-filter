import { useEffect, useState } from 'react'
import { movieList, genres } from './assets/movie-data'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Movie from './assets/components/Movie';
import Option from './assets/components/Option';


function App() {
  const [genre, setGenre] = useState('');
  const [movies, setMovies] = useState(movieList);
  const [movieNum, setMovieNum] = useState(1);
  console.log(genres);
  
  // const genres = movieList.forEach(movie => {
  //   if (genres.includes(movie.genre) === false) {
  //     genres.push(movie.genre)
  //   }
  // });
  // console.log(genres);
  
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
      <div className="container w-75 border my-4 card bg-success">
        <h1 className='text-center py-3'>Movies</h1>
        <div className="form-floating">
          <select name="genre" id="genre-select" className='form-select' aria-label='Filtra per genre'
            onChange={(event) => { setGenre(event.target.value) }}>
            {genres.map((genre, index) =>
              <Option key={index}
                genre={genre} />
            )}
          </select>
          <label htmlFor="genre-select">Filtra per genre</label>
        </div>
        <div className="form-floating my-3">
          <input type="text" className="form-control" id="floatingInput" />
          <label htmlFor="floatingInput">Filtra per titolo</label>
        </div>
        <div className='movie-container mt-5 row justify-content-evenly'>
          {genre !== '' && <p className='border-bottom border-dark fs-4 text-center'>Film trovati: {movieNum}</p>}
          {movies.map((movie, index) =>
            <Movie
              key={index}
              movie={movie}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App
