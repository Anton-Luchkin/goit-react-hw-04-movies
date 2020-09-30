import React, { Component } from 'react';

import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';

import moviesApi from '../servises/moviesApi';

export class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  componentDidMount() {
    const movies = localStorage.getItem('movies');
    const parsedMovies = JSON.parse(movies);

    if (parsedMovies) {
      this.setState({ movies: parsedMovies });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, movies } = this.state;

    if (searchQuery !== prevState.searchQuery) {
      this.fetchMovies(searchQuery);
    }

    if (movies !== prevState.movies) {
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      movies: [],
    });
  };

  fetchMovies = searchQuery => {
    moviesApi
      .fetchMovies({ searchQuery })
      .then(results => this.setState({ movies: results }));
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.onChangeQuery} />
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
