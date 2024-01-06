import React from "react";
import { ColorValue, PressableProps, StyleProp, ViewStyle } from "react-native";
import { Weight } from "../text/Text.types";

export type Size = "small" | "medium" | "large";

export type Options = {
  titleSize?: number;
  titleColor?: ColorValue;
  titleWeight?: Weight;
};

export type DynamicLayout = {
  styles: {
    container: StyleProp<ViewStyle>;
    iconLeft: StyleProp<ViewStyle>;
    iconRight: StyleProp<ViewStyle>;
  };
  iconSize: number;
  titleSize: number;
};

export type Icon = (size: number) => React.ReactNode;

export type Props = PressableProps & {
  style?: StyleProp<ViewStyle>;
  title?: string;
  size?: Size;
  color?: ColorValue;
  outline?: boolean;
  options?: Options;
  iconLeft?: Icon;
  iconRight?: Icon;
};
