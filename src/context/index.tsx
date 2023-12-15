import React from "react";
import { AuthProvider } from "./auth";

const Context = (...providers: any[]) => {
  return ({ children }: { children: React.ReactNode }) => {
    const provider = providers.shift();

    if (!provider) {
      return children;
    }

    if (providers.length === 0) {
      return React.createElement(provider, {}, children);
    }

    return React.createElement(
      provider,
      {},
      Context(...providers)({ children })
    );
  };
};

export default Context(AuthProvider);
