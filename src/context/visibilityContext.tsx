import React, { createContext, useContext, useState } from "react";

const VisibilityContext = createContext<any>(null);

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const setVisibility = async () => {
    setIsVisible(!isVisible);
  };

  return (
    <VisibilityContext.Provider
      value={{ setVisibility, isVisible, setIsVisible }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibilityContext = () => useContext(VisibilityContext);
