import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <p>SEARCHBAR</p>
        <p>
          {searchText}
          {' '}
          {onSearchTextChange}
          {' '}
          {bookmarkedOnly}
          {' '}
          {onBookmarkedChange}
          {' '}
          {selectedGenre}
          {' '}
          {onSelectedGenreChange}
        </p>
        <form data-testid="search-bar-form">

          <p>PARAGRAFO</p>
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
