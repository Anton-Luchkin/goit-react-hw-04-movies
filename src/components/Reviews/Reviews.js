import React, { Component } from 'react';
import moviesApi from '../../servises/moviesApi';

import s from './Reviews.module.css';

export class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    moviesApi
      .fetchReviews({ movieId })
      .then(results => this.setState({ reviews: results }));
  }

  render() {
    const { reviews } = this.state;
    const isShowReviews = reviews.length > 0;
    const isShowMessage = !isShowReviews;

    return (
      <>
        {isShowReviews && (
          <ul className={s.reviewsList}>
            {reviews.map(({ id, author, content }) => (
              <li key={id} className={s.reviewsListItem}>
                <p className={s.reviewAuthor}>{author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
        {isShowMessage && <p> We don't have any reviews for this movie.</p>}
      </>
    );
  }
}

export default Reviews;
