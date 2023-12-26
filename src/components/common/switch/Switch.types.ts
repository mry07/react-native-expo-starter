import React from "react";
import Animated from "react-native-reanimated";

export type Props = {
  value?: boolean;
  thumbActiveColor?: string;
  thumbInactiveColor?: string;
  trackActiveColor?: string;
  trackInactiveColor?: string;
  onChangeValue?: (value: boolean) => void;
};

export type UseHandlerParams = Pick<Props, "value" | "onChangeValue">;

export type UseHandlerResult = [
  React.Dispatch<React.SetStateAction<boolean>>,
  {
    progress: Animated.SharedValue<number>;
  }
];
