import React from "react";
import * as Colors from "../../../utility/colors";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BackdropProps } from "./Picker.types";
import { Pressable, StyleSheet } from "react-native";

const Backdrop = ({ style, animatedIndex, onPress }: BackdropProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0, 1],
      [0, 0.3, 0.5],
      Extrapolate.CLAMP
    ),
  }));

  const containerStyles = React.useMemo(
    () => [
      style,
      {
        backgroundColor: Colors.black(),
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return (
    <Animated.View style={containerStyles}>
      <Pressable style={styles.press} onPress={onPress} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  press: {
    flex: 1,
  },
});

export default Backdrop;
