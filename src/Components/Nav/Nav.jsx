import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = ({ children }) => {
  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <NavLink to="/" className={s.link}>
            <p>Home</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/movies" className={s.link}>
            <p>Movies</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
