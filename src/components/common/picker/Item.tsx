import { StyleProp, ViewStyle, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Data, ItemProps } from "./Picker.types";
import Text from "../text/Text";
import * as Colors from "../../../utils/colors";

const Item = React.memo<ItemProps>(({ item, index, onPick }) => {
  const selectedStyle: StyleProp<ViewStyle> = [
    styles.container,
    item.selected && {
      backgroundColor: Colors.grey(undefined, "900"),
    },
  ];

  return (
    <Pressable style={selectedStyle} onPress={() => onPick(index)}>
      <Text weight="500" color={item.selected ? Colors.white() : undefined}>
        {item.label}
      </Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});

export default Item;
