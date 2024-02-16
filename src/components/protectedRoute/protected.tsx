import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/formContext";
import React, { useEffect } from "react";

export const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({
  element,
}) => {
  const { authenticated } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is not authenticated, redirect them to the login page
    if (!authenticated) {
      navigate("/", { replace: true });
    }
  }, [authenticated, navigate]);

  // Return null or loading state while checking authentication
  return authenticated ? element : null;
};
