import React, { useEffect, useState } from "react";
import { StyledError, StyledErrorContainer } from "./error.styled";
// import { useVisibilityContext } from "../../context/visibilityContext";
import { useNavigate } from "react-router-dom";

interface ErrorProps {
  msg: string;
}
export const Error: React.FC<ErrorProps> = ({ msg }) => {
  const [showError, setShowError] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowError(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  if (!showError) {
    return null;
  }
  return (
    <StyledErrorContainer>
      <StyledError>&times;</StyledError>
      <p>{msg}</p>
    </StyledErrorContainer>
  );
};
