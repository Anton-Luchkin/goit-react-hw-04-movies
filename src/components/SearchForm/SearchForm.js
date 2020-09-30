import React, { Component } from 'react';

import s from './SearchForm.module.css';

export class SearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = ({ currentTarget }) => {
    this.setState({ query: currentTarget.value });
  };

  handleSubmit = e => {
    const { query } = this.state;

    e.preventDefault();

    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={this.handleChange}
          className={s.formInput}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
