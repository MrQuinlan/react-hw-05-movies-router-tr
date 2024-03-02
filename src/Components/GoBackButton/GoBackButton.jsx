import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './GoBackButton.module.css';

const GoBackButton = () => {
  const prevLocation = useRef(useLocation().state);

  return (
    <button className={s.btn}>
      <Link to={prevLocation.current.from} className={s.link}>
        Go Back
      </Link>
    </button>
  );
};

export default GoBackButton;
