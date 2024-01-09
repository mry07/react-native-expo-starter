import fonts from "../src/constant/fonts";
import React from "react";
import Context from "../src/presentation/context";
import Interceptors from "../src/infrastructure/api/interceptors";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Slot } from "expo-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { StatusBar } from "expo-status-bar";
import { LoadingModal } from "../src/presentation/modal";

my = {};
library.add(fab, far, fas);

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fontsLoaded] = Font.useFonts(fonts);

  React.useEffect(() => {
    if (fontsLoaded) {
      my.loading = setLoading;

      setIsReady(true);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!isReady) {
    return null;
  }

  return (
    <Context>
      <Interceptors>
        <StatusBar style="dark" />
        <Slot />
        <LoadingModal visible={loading} />
      </Interceptors>
    </Context>
  );
};

export default Layout;
