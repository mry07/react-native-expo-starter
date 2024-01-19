import React from "react";
import { ContextProps } from "./auth-context.types";
import { getStorage, setStorage } from "../../utility/storage";

const AuthContext = React.createContext<ContextProps>(null);

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [hasLogged, setHasLogged] = React.useState<boolean>(false);

  const contextValue = React.useMemo<ContextProps>(
    () => ({
      isLoading,
      hasLogged,
      login: async () => {
        await setStorage("@has_logged", true);
        setHasLogged(true);
      },
      logout: async () => {
        await setStorage("@has_logged", false);
        setHasLogged(false);
      },
    }),
    [isLoading, hasLogged]
  );

  React.useEffect(() => {
    (async () => {
      const result = await getStorage("@has_logged");
      setHasLogged(result === true);
      setIsLoading(false);
    })();
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
