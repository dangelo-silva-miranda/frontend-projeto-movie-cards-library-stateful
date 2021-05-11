import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    // const { movies } = this.props;

    this.state = {
      title: '',
      // subtitle: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  onTitleChange = ({ target }) => {
    this.setState({ title: target.value });
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="title-input"
          data-testid="title-input-label"
        >
          Título:
          <input
            id="title-input"
            type="text"
            value={ title }
            onChange={ this.onTitleChange }
            data-testid="title-input"
          />

        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
