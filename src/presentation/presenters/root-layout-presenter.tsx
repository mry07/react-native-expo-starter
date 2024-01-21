import fonts from "../../constant/fonts";
import React from "react";
import AppLayoutPresenter from "./root-layout-presenter.types";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

my = {};
library.add(fab, far, fas);

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const useRootLayoutPresenter = (): AppLayoutPresenter => {
  const [fontsLoaded] = Font.useFonts(fonts);
  const [isReady, setIsReady] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (fontsLoaded) {
      my.loading = setIsLoading;
      setIsReady(true);

      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { isReady, isLoading };
};
