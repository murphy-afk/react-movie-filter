const movieList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];
const genres = [];
movieList.forEach(movie => {
  if (genres.includes(movie.genre) === false) {
    genres.push(movie.genre)
  }
});



export { movieList, genres }