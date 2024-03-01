import { Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <div className="App">
      <Header>
        <Nav>
          <HomePage></HomePage>
          <MoviesPage></MoviesPage>
        </Nav>
      </Header>

      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <Section label="Trending today">
                <MoviesList />
              </Section>
            }
          ></Route>

          <Route
            path="/movies/:movieId"
            element={
              <MovieDetails>
                <GoBackButton />
              </MovieDetails>
            }
          >
            <Route path="cast" element={<CastList />}></Route>

            <Route path="reviews" element={<ReviewsList />}></Route>
          </Route>
        </Routes>
      </Main>
    </div>
  );
}

export default App;
