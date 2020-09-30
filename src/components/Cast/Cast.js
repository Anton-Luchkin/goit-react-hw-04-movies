import React, { Component } from 'react';
import moviesApi from '../../servises/moviesApi';

import errorImage from '../../errorImage.png';

import s from './Cast.module.css';

export class Cast extends Component {
  state = {
    actors: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    moviesApi
      .fetchCast({ movieId })
      .then(cast => this.setState({ actors: cast }));
  }

  render() {
    const { actors } = this.state;

    return (
      <>
        <ul className={s.castList}>
          {actors.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `${errorImage}`
                }
                alt={name}
                className={s.img}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
