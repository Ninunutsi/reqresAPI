import React, { createContext, useContext, useState } from "react";

const FormContext = createContext<any>(null);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authenticated, setAuthenticated] = useState<boolean>(
    !!localStorage.getItem("login")
  );
  const [status, setStatus] = useState<boolean>(
    !!localStorage.getItem("signup")
  );

  const signup = (token: string) => {
    setStatus(true);
    localStorage.setItem("signup", token);
  };

  const login = (token: string) => {
    if (status) {
      localStorage.setItem("login", token);
      setAuthenticated(true);
    }
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("login");
  };

  return (
    <FormContext.Provider
      value={{ authenticated, login, logout, signup, status }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
