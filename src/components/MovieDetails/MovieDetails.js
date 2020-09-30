import React from 'react';
import PropTypes from 'prop-types';

import s from './MovieDetails.module.css';

import errorImage from '../../errorImage.png';

function MovieDetails({
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  genres,
}) {
  const imgUrl = `https://image.tmdb.org/t/p/w400`;

  return (
    <div className={s.wrapper}>
      <img
        src={poster_path ? `${imgUrl}${poster_path}` : `${errorImage}`}
        alt={title}
        className={s.posterImg}
      />
      <div>
        <h2 className={s.movieTitle}>
          {title} ({release_date})
        </h2>
        <p className={s.userScore}>User Score: {vote_average}%</p>
        <h3 className={s.owerviewTitle}>Owerview</h3>
        <p className={s.owerviewText}>{overview}</p>
        <h4 className={s.genresTitle}>Genres</h4>
        <ul className={s.genresList}>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieDetails.defaultProps = {
  poster_path: errorImage,
};

MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieDetails;
