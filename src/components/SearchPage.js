// SearchPage.js (continued)

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MovieCard from './MovieCard';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate  = useNavigate();
  // const hm= useHistory();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    if (query) {
      setSearchQuery(query);
      fetchSearchResults(query);
    }
  }, [location.search]);

  const fetchSearchResults = async (query) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ee10f695882d05ee2a1add889304098b&query=${query}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate.bind(`/search?query=${searchQuery}`);
      fetchSearchResults(searchQuery);
    }
  };

  return (
    <div className="">
      <div className="container items-center justify-center space-x-3 space-y-3 mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4 mx-3">Search Movies</h2>
        <form onSubmit={handleSearch} className="mb-4 ">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies..."
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[16rem]"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2   ml-2 mt-4 hover:bg-blue-600 transition-colors duration-200"
          >
            Search
          </button>
        </form>
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
