// import s from './CastList.module.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovies from 'Service/MovieAPI';

const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovies('credits', '', movieId)
      .then(res => {
        setCast(res.cast);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <ul>
      {cast.map(item => {
        const { id, profile_path, name, character } = item;

        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={`poster ${name}`}
            ></img>
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CastList;
