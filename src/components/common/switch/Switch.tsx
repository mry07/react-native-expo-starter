import React from "react";
import * as Colors from "../../../utility/colors";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Pressable, StyleSheet } from "react-native";

const SWITCH_WIDTH = 50;
const SWITCH_HEIGHT = SWITCH_WIDTH / 1.7;
const SWITCH_PADDING = SWITCH_HEIGHT / 10;
const SWITCH_RADIUS = SWITCH_HEIGHT / 2;
const THUMB_SIZE = SWITCH_HEIGHT - SWITCH_PADDING * 2;
const THUMB_RADIUS = THUMB_SIZE / 2;
const THUMB_TRANS_X = SWITCH_WIDTH - SWITCH_HEIGHT;

const Switch = () => {
  const [active, setActive] = React.useState(false);

  const thumbStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(active ? THUMB_TRANS_X : 0, {
            easing: Easing.inOut(Easing.exp),
          }),
        },
      ],
    };
  }, [active]);

  return (
    <Pressable style={styles.container} onPress={() => setActive(!active)}>
      <Animated.View style={[styles.thumb, thumbStyles]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black(0.8),
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
    backgroundColor: Colors.white(),
  },
});

export default Switch;
