import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import MovieDetails from '../components/MovieDetails/MovieDetails';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

import moviesApi from '../servises/moviesApi';

import s from './MovieDetailsPage.module.css';

export class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    moviesApi.fetchMovie({ movieId }).then(data => this.setState({ ...data }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push('/');
  };

  render() {
    const {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    } = this.state;
    const { url, path } = this.props.match;

    return (
      <>
        <button type="button" onClick={this.handleGoBack} className={s.button}>
          Go back
        </button>

        <MovieDetails
          poster_path={poster_path}
          title={title}
          release_date={release_date}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />
        <div className={s.additionalContainer}>
          <h2>Additional Information</h2>

          <ul className={s.additionalMenu}>
            <li>
              <NavLink
                to={`${url}/cast`}
                className="NavLink"
                activeClassName="NavLink_active"
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/reviews`}
                className="NavLink"
                activeClassName="NavLink_active"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

        <Route path={`${path}/cast`} component={Cast} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
