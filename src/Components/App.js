import { Routes, Route, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from 'Components/Header';
import Nav from 'Components/Nav';
import HomePage from 'Pages/HomePage';
import MoviesPage from 'Pages/MoviesPage';
import Main from 'Components/Main';
import Section from 'Components/Section';
import MoviesList from 'Components/MoviesList';
import MovieDetails from 'Components/MovieDetails';
import GoBackButton from 'Components/GoBackButton';
import CastList from 'Components/CastList';
import ReviewsList from 'Components/ReviewsList';
import MovieSearchForm from 'Components/MovieSearchForm';
import getMovies from 'Service/MovieAPI';

function App() {
  const [movies, setMovies] = useState([]);
  const [requestedMovies, setRequestedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) {
      setRequestedMovies([]);
      return;
    }

    getMovies('search', query)
      .then(({ results }) => {
        setRequestedMovies(results);
      })
      .catch(err => console.error(err));
  }, [searchParams]);

  const onMovieSearch = newQuery => {
    setSearchParams({ query: newQuery.trim() });
  };

  return (
    <div className="App">
      <Header>
        <Nav />
      </Header>

      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage>
                <Section label="Trending today">
                  <MoviesList movies={movies} />
                </Section>
              </HomePage>
            }
          ></Route>

          <Route
            path="/movies/:movieId"
            element={
              <MoviesPage>
                <MovieDetails>
                  <GoBackButton />
                </MovieDetails>
              </MoviesPage>
            }
          >
            <Route path="cast" element={<CastList />}></Route>

            <Route path="reviews" element={<ReviewsList />}></Route>
          </Route>

          <Route
            path="/movies"
            element={
              <>
                <MovieSearchForm onSearch={onMovieSearch} />
                <MoviesList movies={requestedMovies} />
              </>
            }
          />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
