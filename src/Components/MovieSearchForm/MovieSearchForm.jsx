// import s from './MovieSearchForm.module.css'

import { useState } from 'react';

const MovieSearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      setSearchQuery('');
      return alert('Please enter valid query');
    }

    onSearch(searchQuery.trim());
    setSearchQuery('');
  };

  return (
    <form aria-label="movie-search-form" onSubmit={onSubmit}>
      <label>
        <input type="text" value={searchQuery} onChange={onInputChange}></input>
      </label>

      <button type="submit" name="search">
        Search
      </button>
    </form>
  );
};

export default MovieSearchForm;
