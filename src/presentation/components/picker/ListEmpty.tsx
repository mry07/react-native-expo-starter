import Text from "../text/Text";
import React from "react";
import { View, StyleSheet } from "react-native";

const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <Text>Belum ada data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListEmpty;
