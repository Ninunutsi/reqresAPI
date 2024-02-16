import React, { useState } from "react";
import { FormTexts } from "../formTexts";
import { StyledFormGroup } from "./forms.styled";
import { SignUp } from "../auth/signup";
import { Login } from "../auth/login";
import { useVisibilityContext } from "../../context/visibilityContext";

export const Forms: React.FC = () => {
  const { isVisible, setVisibility } = useVisibilityContext();

  const handleButtonClick = () => {
    setVisibility();
  };

  return (
    <StyledFormGroup>
      {isVisible ? <SignUp /> : <Login />}
      <FormTexts
        onClick={handleButtonClick}
        btnValue={isVisible ? "Log In" : "Sign up"}
      />
    </StyledFormGroup>
  );
};
