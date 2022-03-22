function MovieItem({ movie }) {
  return (
    <article>
      <h4>{movie.title}</h4>
      <div>{movie.genre}</div>
    </article>
  );
}

export default MovieItem;
