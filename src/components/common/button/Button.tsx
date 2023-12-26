import Text from "../text/Text";
import React from "react";
import * as Colors from "../../../utility/colors";
import { Props } from "./Button.types";
import { useDynamicLayout } from "./Button.hooks";
import {
  View,
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";

const Button = React.forwardRef<View, Props>(
  (
    {
      style,
      title,
      size,
      color,
      outline,
      options = {},
      iconLeft,
      iconRight,
      ...props
    },
    ref
  ) => {
    options = {
      titleWeight: "400",
      titleColor: outline
        ? color
        : Colors.isBright(color)
        ? Colors.black()
        : Colors.white(),

      ...options,
    };

    const dynamicLayout = useDynamicLayout({
      title,
      size,
      options,
      iconLeft,
      iconRight,
    });

    const containerStyle: StyleProp<ViewStyle> = [
      styles.container,
      dynamicLayout.styles.container,
      { backgroundColor: outline ? "transparent" : color, borderColor: color },
      style,
    ];

    return (
      <Pressable
        ref={ref}
        style={containerStyle}
        android_ripple={{
          color: Colors.grey(undefined, "400"),
        }}
        {...props}
      >
        {iconLeft && (
          <View style={dynamicLayout.styles.iconLeft}>
            {iconLeft(dynamicLayout.iconSize)}
          </View>
        )}

        <Text
          size={dynamicLayout.titleSize}
          weight={options.titleWeight}
          color={options.titleColor}
          align="center"
        >
          {title}
        </Text>

        {iconRight && (
          <View style={dynamicLayout.styles.iconRight}>
            {iconRight(dynamicLayout.iconSize)}
          </View>
        )}
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

Button.defaultProps = {
  size: "medium",
  color: Colors.black(0.85),
  outline: false,
};

export default Button;
