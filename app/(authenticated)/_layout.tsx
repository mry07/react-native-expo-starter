import React from "react";
import { Redirect, Slot } from "expo-router";
import { MaterialIndicator } from "react-native-indicators";
import { useAuth } from "../../src/presentation/context/auth-context";

const AppLayout = () => {
  const { isLoading, hasLogged } = useAuth();

  if (isLoading) {
    return <MaterialIndicator />;
  }

  if (!hasLogged) {
    return <Redirect href="/login" />;
  }

  return <Slot />;
};

export default AppLayout;
