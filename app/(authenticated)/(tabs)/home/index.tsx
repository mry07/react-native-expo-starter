import React from "react";
import { useHomePresenter } from "../../../../src/presentation/presenters/home-presenter";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  const { getData } = useHomePresenter();

  return (
    <View style={styles.container}>
      <Text onPress={getData}>Get Data</Text>
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

export default Home;
