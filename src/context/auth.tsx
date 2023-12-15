import React from "react";
import { ContextProps } from "./auth.types";

export const AuthContext = React.createContext<ContextProps>(null);

export const AuthProvider = ({ children }) => {
  const [hasLogged, setHasLogged] = React.useState<boolean>(false);

  const value = React.useMemo<ContextProps>(
    () => ({
      hasLogged,
      setHasLogged,
    }),
    [hasLogged]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
