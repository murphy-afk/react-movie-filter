export default function Option({ movie }) {
  return (
    <option value={movie.genre}>{movie.genre}</option>
  )
}