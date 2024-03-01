// import s from './MovieDetails.module.css'
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = ({ children }) => {
  return (
    <>
      {children}
      <article>
        <img alt="movie poster"></img>
        <h2>Movie name</h2>
        <ul>
          <li>
            <h3>Rating</h3>
            <p>100 %</p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>perfect</p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>so scared</p>
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
