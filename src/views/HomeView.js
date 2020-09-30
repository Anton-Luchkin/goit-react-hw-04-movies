import React, { Component } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';

import moviesApi from '../servises/moviesApi';

export class HomeView extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesApi
      .fetchTrendMovies()
      .then(results => this.setState({ movies: results }));
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h2>Trending today</h2>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default HomeView;
