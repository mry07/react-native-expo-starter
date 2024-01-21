import React from "react";
import Context from "../src/presentation/context";
import Interceptors from "../src/infrastructure/api/interceptors";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LoadingModal } from "../src/presentation/modal";
import { useRootLayoutPresenter } from "../src/presentation/presenters/root-layout-presenter";

const Layout = () => {
  const { isReady, isLoading } = useRootLayoutPresenter();

  if (!isReady) {
    return null;
  }

  return (
    <Context>
      <Interceptors>
        <StatusBar style="dark" />
        <Slot />
        <LoadingModal visible={isLoading} />
      </Interceptors>
    </Context>
  );
};

export default Layout;
