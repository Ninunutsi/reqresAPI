import React, { useEffect } from "react";
import { StyledMain } from "./landing-page.styled";
import { Forms } from "../../components/formGroup";
import { useNavigate } from "react-router-dom";
import { VisibilityProvider } from "../../context/visibilityContext";
import { useFormContext } from "../../context/formContext";

export const LandingPage: React.FC<{}> = () => {
  const { authenticated } = useFormContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (authenticated) {
      navigate("/main");
    }
  }, [authenticated, navigate]);
  return (
    <StyledMain>
      <VisibilityProvider>
        <Forms />
      </VisibilityProvider>
    </StyledMain>
  );
};
