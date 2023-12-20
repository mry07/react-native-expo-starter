import fonts from "../src/constant/fonts";
import React from "react";
import Context from "../src/context";
import Interceptors from "../src/service/api/Interceptors";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { api } from "../src/service/api";
import { Slot } from "expo-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { LoadingModal } from "../src/components/modal";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

my = {};
library.add(fab, far, fas);

const Layout = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fontsLoaded] = Font.useFonts(fonts);

  React.useEffect(() => {
    if (fontsLoaded) {
      my.api = api;
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
        <Slot />
        <LoadingModal visible={loading} />
      </Interceptors>
    </Context>
  );
};

export default Layout;
