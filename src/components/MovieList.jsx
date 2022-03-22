import { useEffect, useState } from 'react';
import MovieItem from './MovieItem';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log('UseEffect');
    listMovies();
  }, []);

  const listMovies = async () => {
    const url =
      'https://movieflix-api-development.azurewebsites.net/api/v1/movies';

    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (!response.status === 200) {
        console.log('Det gick inte att hämta!');
        return;
      }

      //Läs in datat ifrån response...
      const result = await response.json();

      console.log(result);

      setMovies(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h2>Här kommer vi att lista alla aktuella filmer</h2>
      <h4>Nya superbra filmer</h4>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

export default MovieList;
