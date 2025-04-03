import { useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Movie } from '../types/movie';

const SearchMovie = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=5228c784&&s=${searchTerm}`);
      console.log(response.data);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setError('');
      } else {
        setMovies([]);
        setError('No movies found!');
      }
    } catch (err) {
      setError('Failed to fetch movies');
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Movie Search</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Movies..."
          className="border border-gray-300 p-3 rounded-lg w-96 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          onClick={fetchMovies} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 font-semibold">{error}</p>}
      <div className="flex flex-wrap justify-center gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchMovie;
