import React from "react";
import * as Colors from "../../../utility/colors";
import { Props } from "./Text.types";
import { useFontFamily } from "./Text.hooks";
import { StyleProp, TextStyle, Text as RNText, StyleSheet } from "react-native";

const Text = React.forwardRef<RNText, Props>(
  (
    { style, size, color, font, align, weight, variant, children, ...props },
    ref
  ) => {
    const fontFamily = useFontFamily({ font, variant, weight });

    const textStyles: StyleProp<TextStyle> = [
      styles.text,
      {
        color,
        fontFamily,
        fontSize: size,
        textAlign: align,
      },
      style,
    ];

    return (
      <RNText {...props} ref={ref} style={textStyles}>
        {children}
      </RNText>
    );
  }
);

const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
  },
});

Text.defaultProps = {
  size: 14,
  font: "poppins",
  weight: "400",
  variant: "normal",
  color: Colors.grey(undefined, "900"),
};

export default Text;
