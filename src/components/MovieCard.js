// MovieCard.js

import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 flex flex-col">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-64 w-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
      <p className="text-sm text-gray-500 mb-4">{movie.release_date}</p>
      <Link
        to={`/movie/${movie.id}`}
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-200"
      >
        View Details
      </Link>
    </div>
  );
}

export default MovieCard;
