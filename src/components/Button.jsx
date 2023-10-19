import React, { Component } from "react";
import { ButtonLoadMoreStyled } from "./styledComponents/Button.styled";

export class ButtonLoadMore extends Component {
    render() {
        const { onLoadPics } = this.props

      return (
          <ButtonLoadMoreStyled onClick={onLoadPics}>Load more</ButtonLoadMoreStyled>
      );  
    }
  }
