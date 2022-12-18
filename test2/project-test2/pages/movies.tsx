import React, { useState, useEffect } from 'react';
import axios from 'axios';


function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/movie');
      console.log(result)
      setMovies(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {movies.map(movie => (
          <li key={movie.id}>
          <img src={movie.image} alt="" />
          {movie.title}
          {movie.rate}
          {movie.description}
        </li>

        
        
      ))}
    </ul>
  );
}

export default MovieList;
