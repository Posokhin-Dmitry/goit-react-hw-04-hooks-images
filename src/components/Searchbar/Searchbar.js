import PropTypes from 'prop-types';
import { useState } from 'react';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      alert('enter the name of the picture');
    }
    onSubmit(query);
    setQuery('');
  };

  const handleQuery = event => {
    setQuery(event.target.value);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleQuery}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
