import React from "react";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import { UseHandlerParams, UseHandlerResult } from "./Switch.types";

export const useHandler = (params: UseHandlerParams): UseHandlerResult => {
  const [active, setActive] = React.useState(false);

  const progress = useSharedValue(0);

  React.useEffect(() => {
    setActive(params.value ?? false);
  }, [params.value]);

  React.useEffect(() => {
    progress.value = withTiming(active ? 1 : 0, {
      easing: Easing.inOut(Easing.exp),
    });

    if (params.value != active) {
      params.onChangeValue?.(active);
    }
  }, [active]);

  return { progress, setActive };
};
