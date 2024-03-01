import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css';
const HomePage = () => {
  return (
    <li>
      <NavLink to="/" className={s.link}>
        <p>Home</p>
      </NavLink>
    </li>
  );
};

export default HomePage;
