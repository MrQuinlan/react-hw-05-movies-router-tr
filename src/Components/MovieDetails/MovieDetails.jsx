// import s from './MovieDetails.module.css'
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import getMovies from 'Service/MovieAPI';

const MovieDetails = ({ children }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovies('searchById', '', movieId)
      .then(movie => {
        setMovie(movie);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      {children}
      <article>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={`poster ${movie.title}`}
        ></img>
        <h2>{movie.title}</h2>
        <ul>
          <li>
            <p>User score: {Math.round(movie.vote_average * 10)} %</p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </li>
          <li>
            <h3>Genres</h3>

            <ul>
              {movie.genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
            </ul>
          </li>
        </ul>

        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>

          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </article>
    </>
  );
};

export default MovieDetails;
