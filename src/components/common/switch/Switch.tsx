import React from "react";
import * as Colors from "../../../utility/colors";
import Animated, {
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Pressable } from "react-native";

const SWITCH_WIDHT = 50;
const SWITCH_HEIGHT = SWITCH_WIDHT / 1.7;
const SWITCH_PADDING = SWITCH_HEIGHT / 10;
const SWITCH_RADIUS = SWITCH_HEIGHT / 2;
const THUMB_SIZE = SWITCH_HEIGHT - SWITCH_PADDING * 2;
const THUMB_TRANS_X = SWITCH_WIDHT - SWITCH_HEIGHT;
const THUMB_RADIUS = THUMB_SIZE / 2;

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
    <Pressable
      style={{
        backgroundColor: Colors.black(0.9),
        width: SWITCH_WIDHT,
        height: SWITCH_HEIGHT,
        borderRadius: SWITCH_RADIUS,
        padding: SWITCH_PADDING,
        overflow: "hidden",
      }}
      onPress={() => setActive(!active)}
    >
      <Animated.View
        style={[
          {
            width: THUMB_SIZE,
            height: THUMB_SIZE,
            borderRadius: THUMB_RADIUS,
            backgroundColor: Colors.white(),
          },
          thumbStyles,
        ]}
      />
    </Pressable>
  );
};

export default Switch;
