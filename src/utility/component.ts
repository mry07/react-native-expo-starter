import React from "react";

export const createComponentTree = (...data: any[]) => {
  return ({ children }: { children: React.ReactNode }) => {
    const components = [...data];
    const component = components.shift();

    if (!component) {
      return children;
    }

    if (components.length === 0) {
      return React.createElement(component, {}, children);
    }

    return React.createElement(
      component,
      {},
      createComponentTree(...components)({ children })
    );
  };
};
