export default function Movie({ movie }) {
  const genreclass = "fs-6 " + `${movie.genre}`;
  return (
    <div className="card col-5 mb-2">
      <h2 className="card-title border-bottom">{movie.title}</h2>
      <p className={genreclass}>Genere: {movie.genre}</p>
      <p className="fs-6 mb-0 text-body-secondary">Sintesi:</p>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, minus! Neque cumque alias eum aperiam iste eaque aliquam est, quae assumenda accusamus? Ea culpa fugit provident! Quae fugit magni ad.</p>
    </div>
  )
}