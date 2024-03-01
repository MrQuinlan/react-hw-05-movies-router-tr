import s from './Nav.module.css';

const Nav = ({ children }) => {
  return (
    <nav>
      <ul className={s.navList}>{children}</ul>
    </nav>
  );
};

export default Nav;
