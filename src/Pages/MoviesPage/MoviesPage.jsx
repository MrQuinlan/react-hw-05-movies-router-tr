import { NavLink } from 'react-router-dom';
import s from './MoviesPage.module.css';
const MoviesPage = () => {
  return (
    <li>
      <NavLink to="/movies" className={s.link}>
        <p>Movies</p>
      </NavLink>
    </li>
  );
};

export default MoviesPage;
