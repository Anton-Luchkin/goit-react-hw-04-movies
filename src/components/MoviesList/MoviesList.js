import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from '../../routes';

import s from './MoviesList.module.css';

function MoviesList({ movies, location }) {
  return (
    <ul className={s.moviesList}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            className={s.movieItem}
            to={{
              pathname: `${routes.movies}/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);
