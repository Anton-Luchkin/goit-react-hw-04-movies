import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Wrapper from './components/Wrapper/Wrapper';
import Navigation from './components/Navigation/Navigation';

import routes from './routes';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /*webpackChankName: "home-view"*/),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /*webpackChankName: "movies-page"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /*webpackChankName: "movie-details-page"*/
  ),
);

function App() {
  return (
    <Wrapper>
      <Navigation />
      <Suspense fallback={'Loading...'}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
          <Route component={HomeView} />
        </Switch>
      </Suspense>
    </Wrapper>
  );
}

export default App;
