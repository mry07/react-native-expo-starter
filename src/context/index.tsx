import React from "react";
import { AuthProvider } from "./auth";

const Context = (...data: any[]) => {
  return ({ children }: { children: React.ReactNode }) => {
    const providers = [...data];
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
