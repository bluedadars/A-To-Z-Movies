// MovieDetails.js (continued)

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ee10f695882d05ee2a1add889304098b`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownload = (downloadUrl) => {
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {movie ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{movie.title}</h2>
            <div className="flex">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="h-64 w-48 object-cover mr-4"
              />
              <div>
                <p className="text-gray-500 mb-2">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-gray-500 mb-2">
                  Average Rating: {movie.vote_average}
                </p>
                <p className="text-gray-500 mb-2">Overview: {movie.overview}</p>
                {movie.download_links && movie.download_links.length > 0 ? (
                  <div>
                    <p className="font-semibold mb-2">Download Links:</p>
                    <ul>
                      {movie.download_links.map((link, index) => (
                        <li key={index}>
                          <button
                            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600 transition-colors duration-200"
                            onClick={() => handleDownload(link.url)}
                          >
                            Download {index + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p>No download links available.</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;




// // MovieDetails.js (continued)

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     fetchMovieDetails();
//   }, []);

//   const fetchMovieDetails = async () => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${id}?api_key=ee10f695882d05ee2a1add889304098b`
//       );
//       const data = await response.json();
//       setMovie(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDownload = () => {
//     if (movie && movie.download_link) {
//       const downloadLink = document.createElement('a');
//       downloadLink.href = movie.download_link;
//       downloadLink.setAttribute('download', movie.title);
//       downloadLink.click();
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         {movie ? (
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">{movie.title}</h2>
//             <div className="flex">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="h-64 w-48 object-cover mr-4"
//               />
//               <div>
//                 <p className="text-gray-500 mb-2">
//                   Release Date: {movie.release_date}
//                 </p>
//                 <p className="text-gray-500 mb-2">
//                   Average Rating: {movie.vote_average}
//                 </p>
//                 <p className="text-gray-500 mb-2">Overview: {movie.overview}</p>
//                 {movie.download_link ? (
//                   <button
//                     className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600 transition-colors duration-200"
//                     onClick={handleDownload}
//                   >
//                     Download
//                   </button>
//                 ) : (
//                   <p>No download link available.</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MovieDetails;
