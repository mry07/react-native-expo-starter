import {
  View,
  StyleSheet,
  TextInput,
  StyleProp,
  TextStyle,
  Pressable,
  ViewStyle,
} from "react-native";
import React from "react";
import { Props } from "./Input.types";
import * as Colors from "../../../utility/colors";
import Text from "../text/Text";

export const INPUT_HEIGHT = 44;

const Input = React.forwardRef<TextInput, Props>(
  (
    {
      containerStyle,
      wrapperStyle,
      inputStyle,
      label,
      error,
      size,
      color,
      font,
      align,
      weight,
      variant,
      editable,
      iconLeft,
      iconRight,
      onPress,
      onIconLeftPress,
      onIconRightPress,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<TextInput>(null);

    const fontFamily = React.useMemo(
      () => `${font}-${weight}-${variant}`,
      [font, variant, weight]
    );

    React.useImperativeHandle(ref, () => inputRef.current, []);

    const handleInputPress = () => {
      onPress ? onPress() : inputRef.current.focus();
    };

    const newWrapperStyle: StyleProp<ViewStyle> = [
      styles.wrapper,
      Boolean(iconLeft) && {
        paddingLeft: 0,
      },
      Boolean(iconRight) && {
        paddingRight: 0,
      },
      wrapperStyle,
    ];

    const newInputStyle: StyleProp<TextStyle> = [
      styles.input,
      {
        color,
        fontFamily,
        fontSize: size,
      },
      inputStyle,
    ];

    return (
      <View style={containerStyle}>
        {label && (
          <Text
            style={styles.label}
            size={12}
            weight="500"
            color={Colors.grey(undefined, "900")}
          >
            {label}
          </Text>
        )}

        <Pressable
          style={newWrapperStyle}
          onPress={handleInputPress}
          pointerEvents={Boolean(onPress) ? "box-only" : "box-none"}
        >
          {iconLeft && (
            <Pressable
              style={styles.iconLeft}
              disabled={Boolean(onPress)}
              onPress={() => onIconLeftPress()}
            >
              {iconLeft({ size: 16, color: Colors.grey(undefined, "700") })}
            </Pressable>
          )}

          <TextInput
            {...props}
            ref={inputRef}
            style={newInputStyle}
            textAlign={align}
            editable={editable ?? !onPress}
            placeholderTextColor={Colors.grey()}
          />

          {iconRight && (
            <Pressable
              style={styles.iconRight}
              disabled={Boolean(onPress)}
              onPress={() => onIconRightPress()}
            >
              {iconRight({ size: 16, color: Colors.grey(undefined, "700") })}
            </Pressable>
          )}
        </Pressable>

        {error && (
          <Text
            style={styles.error}
            size={12}
            color={Colors.red(undefined, "400")}
          >
            {error}
          </Text>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: Colors.grey(undefined, "900"),
    paddingLeft: 14,
    paddingRight: 14,
  },
  input: {
    includeFontPadding: false,
    height: INPUT_HEIGHT,
    flex: 1,
  },
  iconLeft: {
    paddingLeft: 14,
    paddingRight: 8,
    justifyContent: "center",
  },
  iconRight: {
    paddingRight: 14,
    paddingLeft: 8,
    justifyContent: "center",
  },
  label: {
    marginBottom: 8,
    marginLeft: 4,
  },
  error: {
    marginTop: 4,
    marginLeft: 4,
  },
});

Input.defaultProps = {
  size: 16,
  font: "poppins",
  weight: "400",
  variant: "normal",
  color: Colors.grey(undefined, "900"),
};

export default Input;
