import React from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import * as Colors from "../../../utils/colors";
import { Pressable, StyleSheet } from "react-native";
import { BackdropProps } from "./Picker.types";

const Backdrop = ({ animatedIndex, style, onPress }: BackdropProps) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0, 1],
      [0, 0.3, 0.5],
      Extrapolate.CLAMP
    ),
  }));

  // styles
  const containerStyle = React.useMemo(
    () => [style, { backgroundColor: Colors.black() }, containerAnimatedStyle],
    [style, containerAnimatedStyle]
  );

  return (
    <Animated.View style={containerStyle}>
      <Pressable style={styles.press} onPress={() => onPress()} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  press: {
    flex: 1,
  },
});

export default Backdrop;
