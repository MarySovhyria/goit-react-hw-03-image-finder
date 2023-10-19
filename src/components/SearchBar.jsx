import React, { Component } from "react";
import { SearchbarStyled } from "./styledComponents/SearchBar.styled";
import { SearchFormStyled } from "./styledComponents/SearchBar.styled";
import { SearchFormButtonStyled } from "./styledComponents/SearchBar.styled";
import { SearchFormButtonLabel } from "./styledComponents/SearchBar.styled";
import { SearchForInput } from "./styledComponents/SearchBar.styled";
import PropTypes from 'prop-types';

export class Searcher extends Component {
  render() {
    const { onChangeImageName, onSubmit, imageName } = this.props;

    return (
      <SearchbarStyled className="searchbar">
        <SearchFormStyled className="form" onSubmit={onSubmit}>
          <SearchFormButtonStyled type="submit" className="button">
            <SearchFormButtonLabel className="button-label">Search</SearchFormButtonLabel>
          </SearchFormButtonStyled>

          <SearchForInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={imageName} 
            onChange={onChangeImageName} 
          />
        </SearchFormStyled>
      </SearchbarStyled>
    );
  }
}

Searcher.propTypes = {
  onChangeImageName: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  imageName: PropTypes.string.isRequired, 
};