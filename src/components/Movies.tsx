import { OurMovie } from '../types';

interface MoviesProps {
  movies: OurMovie[] | null;
}

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  if (!movies) return <p>No se encontraron películas</p>;
  return (
    <ul className="moviesContainer">
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default Movies;
