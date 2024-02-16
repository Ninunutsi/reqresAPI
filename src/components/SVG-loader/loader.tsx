import React from "react";
import { StyledContainer, StyledLoader } from "./loader.styled";

export const Loader = () => {
  return (
    <StyledContainer>
      <StyledLoader>
        <circle cx="75" cy="75" r="20"></circle>
        <circle cx="75" cy="75" r="35"></circle>
        <circle cx="75" cy="75" r="50"></circle>
        <circle cx="75" cy="75" r="65"></circle>
      </StyledLoader>
    </StyledContainer>
  );
};
