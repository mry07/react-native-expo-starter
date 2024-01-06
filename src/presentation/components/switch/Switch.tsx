import React from "react";
import * as Colors from "../../../utility/colors";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Props } from "./Switch.types";
import { useHandler } from "./Switch.hooks";
import { Pressable, StyleSheet } from "react-native";

const SWITCH_WIDTH = 50;
const SWITCH_HEIGHT = SWITCH_WIDTH / 1.7;
const SWITCH_PADDING = SWITCH_HEIGHT / 10;
const SWITCH_RADIUS = SWITCH_HEIGHT / 2;
const THUMB_SIZE = SWITCH_HEIGHT - SWITCH_PADDING * 2;
const THUMB_RADIUS = THUMB_SIZE / 2;
const THUMB_TRANS_X = SWITCH_WIDTH - SWITCH_HEIGHT;

const Switch = ({
  value,
  trackActiveColor = Colors.black(0.85),
  trackInactiveColor = Colors.black(0.85),
  thumbActiveColor = Colors.white(),
  thumbInactiveColor = Colors.white(),
  onChangeValue,
}: Props) => {
  const { progress, setActive } = useHandler({
    value,
    onChangeValue,
  });

  const trackStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [trackInactiveColor, trackActiveColor]
      ),
    };
  }, [trackActiveColor, trackInactiveColor]);

  const thumbStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [thumbInactiveColor, thumbActiveColor]
      ),
      transform: [
        {
          translateX: interpolate(progress.value, [0, 1], [0, THUMB_TRANS_X]),
        },
      ],
    };
  }, [thumbActiveColor, thumbInactiveColor]);

  return (
    <Pressable onPress={() => setActive((s) => !s)}>
      <Animated.View style={[styles.track, trackStyles]}>
        <Animated.View style={[styles.thumb, thumbStyles]} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  track: {
    width: SWITCH_WIDTH,
    height: SWITCH_HEIGHT,
    borderRadius: SWITCH_RADIUS,
    padding: SWITCH_PADDING,
    overflow: "hidden",
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_RADIUS,
  },
});

export default Switch;
