import React from "react";
import fonts from "../src/constant/fonts";
import * as Font from "expo-font";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Slot, SplashScreen } from "expo-router";
import Interceptors from "../src/service/api/Interceptors";
import { api } from "../src/service/api";
import { LoadingModal } from "../src/components/modal";

my = {};
library.add(fab, far, fas);

SplashScreen.preventAutoHideAsync();

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
    <Interceptors>
      <Slot />
      <LoadingModal visible={loading} />
    </Interceptors>
  );
};

export default Layout;
