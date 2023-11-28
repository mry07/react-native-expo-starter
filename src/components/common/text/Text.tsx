import React from "react";
import { Props } from "./Text.types";
import { StyleProp, Text as RNText, TextStyle } from "react-native";
import * as Colors from "../../../utils/colors";

const Text = React.forwardRef<RNText, Props>(
  (
    { style, size, color, font, align, weight, variant, children, ...props },
    ref
  ) => {
    const fontFamily = React.useMemo(
      () => `${font}-${weight}-${variant}`,
      [font, variant, weight]
    );

    const textStyle: StyleProp<TextStyle> = [
      {
        color,
        fontFamily,
        fontSize: size,
        textAlign: align,
        includeFontPadding: false,
      },
      style,
    ];

    return (
      <RNText {...props} ref={ref} style={textStyle}>
        {children}
      </RNText>
    );
  }
);

Text.defaultProps = {
  size: 14,
  font: "poppins",
  weight: "400",
  variant: "normal",
  color: Colors.grey(undefined, "900"),
};

export default Text;
