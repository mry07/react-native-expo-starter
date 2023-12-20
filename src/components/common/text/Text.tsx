import React from "react";
import * as Colors from "../../../utility/colors";
import { Props } from "./Text.types";
import { StyleProp, TextStyle, Text as RNText } from "react-native";

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
