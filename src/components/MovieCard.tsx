import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-all rounded-lg overflow-hidden w-60">
      <Link to={`/movies/${movie.imdbID}`} className="block">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-4 text-center">
          <p className="text-lg font-semibold text-gray-800">{movie.Title}</p>
          <p className="text-gray-600">{movie.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
  