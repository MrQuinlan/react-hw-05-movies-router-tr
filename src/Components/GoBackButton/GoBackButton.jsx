// import s from './GoBackButton.module.css';
import { Link } from 'react-router-dom';

const GoBackButton = () => {
  return (
    <button>
      <Link to="/">Go Back</Link>
    </button>
  );
};

export default GoBackButton;
