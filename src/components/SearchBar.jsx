import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
} from './styledComponents/SearchBar.styled';

const  SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value)
  }

const handleSubmit = event => {
  event.preventDefault(); 
  const searchQuery = event.target.elements.searchName.value.trim(); 
  onSubmit(searchQuery);
  event.target.reset();
}
    return (
      <header>
        <SearchForm onSubmit={handleSubmit}>
          <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
          </a>
          <SearchButton>
            <SearchSpan>Search</SearchSpan>
          </SearchButton>
          <SearchInput
            name="searchName"
            type="text"
            id="search"
            value={inputValue}
            onChange={handleChange}
          />
        </SearchForm>
      </header>
    );
  }

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;