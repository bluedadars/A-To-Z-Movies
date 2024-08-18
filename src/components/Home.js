// Home.js (updated)

import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchPage from './SearchPage';
function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=ee10f695882d05ee2a1add889304098b'
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='min-h-screen'>
      <header className="py-3 bg-gradient-to-r from-purple-600 via-blue-700 to-purple-600 shadow items-center">
        <div className="container flex flex-row space-x-32  content-center mx-auto px-4">
          <h1 className="text-medium flex  items-center font-semibold text-white">AZK Movies
          <img width={'50px'} height={'50px'} className='mx-2' src='Images/R.png'/>
          </h1>
          
          <div className='hidden md:block text-left'>
          <ul className='flex space-x-12 p-2 mx-3 text-white'>
            <li className='hover:underline hover:underline-offset-2'>Home</li>
            <li className='hover:underline hover:underline-offset-2'>Hindi Movies</li>
            <li className='hover:underline hover:underline-offset-2'>Hindi Dubbed Movies</li>
            <li className='hover:underline hover:underline-offset-2'>Hollywood Movies</li>
            <li className='hover:underline hover:underline-offset-2'>About</li>
            <li className='hover:underline hover:underline-offset-2'>Contact</li>
          </ul>
          </div>
        </div>
      </header>
        <div><SearchPage/></div>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Popular Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
      <footer className="py-4 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2023 Movies Downloading Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;





// // Home.js

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetchPopularMovies();
//   }, []);

//   const fetchPopularMovies = async () => {
//     try {
//       const response = await fetch(
//         'https://api.themoviedb.org/3/movie/popular?api_key=ee10f695882d05ee2a1add889304098b'
//       );
//       const data = await response.json();
//       setMovies(data.results);
//       console.log(data.results)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="py-4 bg-white shadow">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl font-semibold">Movies Downloading Website</h1>
//         </div>
//       </header>
//       <main className="container mx-auto px-4 py-8">
//         <h2 className="text-xl font-semibold mb-4">Popular Movies</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {movies.map((movie) => (
//             <div
//               key={movie.id}
//               className="bg-white shadow-lg rounded-md p-4 flex flex-col"
//             >
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="h-64 w-full object-cover mb-4"
//               />
//               <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
//               <p className="text-sm text-gray-500 mb-4">{movie.release_date}</p>
//               <Link
//                 to={`/movie/${movie.id}`}
//                 className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-200"
//               >
//                 View Details
//               </Link>
//             </div>
//           ))}
//         </div>
//       </main>
//       <footer className="py-4 bg-gray-900 text-white">
//         <div className="container mx-auto px-4">
//           <p className="text-center">&copy; 2023 Movies Downloading Website. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;
