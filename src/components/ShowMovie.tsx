import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { MovieDetails as MovieDetailsType } from '../types/movie';

const ShowMovie = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=5228c784&&i=${id}`);
        console.log(response.data);
        if (response.data.Response === 'True') {
          setMovie(response.data);
        } else {
          setError('Movie not found');
        }
      } catch (err) {
        setError('Failed to fetch movie details');
        console.log(err);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <p className="p-6 text-red-500 font-semibold">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Link to="/" className="text-blue-500 font-semibold hover:underline">&larr; Back to Search</Link>
      {movie ? (
        <div className="mt-6 flex flex-col md:flex-row items-center md:items-start gap-8 bg-white shadow-md rounded-lg p-6">
          <img 
            src={movie.Poster} 
            alt={movie.Title} 
            className="w-80 h-auto rounded-lg shadow-md"
          />
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-gray-800">{movie.Title}</h1>
            <p className="text-lg text-gray-600"><strong>Released:</strong> {movie.Released}</p>
            <p className="text-lg text-gray-600"><strong>Genre:</strong> {movie.Genre}</p>
            <p className="text-lg text-gray-600"><strong>Director:</strong> {movie.Director}</p>
            <p className="text-lg text-gray-600"><strong>Actors:</strong> {movie.Actors}</p>
            <p className="text-lg text-gray-600"><strong>Runtime:</strong> {movie.Runtime}</p>
            <p className="text-lg text-gray-700 mt-4"><strong>Plot:</strong> {movie.Plot}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 mt-6">Loading movie details...</p>
      )}
    </div>
  );
};

export default ShowMovie;
