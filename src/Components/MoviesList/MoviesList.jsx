import { Link, useLocation } from 'react-router-dom';
// import s from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = `${useLocation().pathname}${useLocation().search}`;

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
