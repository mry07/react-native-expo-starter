import React from "react";
import { AuthContext } from "../../src/context/auth";
import { Redirect, Slot } from "expo-router";

const AppLayout = () => {
  const { hasLogged } = React.useContext(AuthContext);

  if (!hasLogged) {
    return <Redirect href="/login" />;
  }

  return <Slot />;
};

export default AppLayout;
