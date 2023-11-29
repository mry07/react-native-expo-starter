import React from "react";
import * as Size from "../../constant/size";
import * as Colors from "../../utils/colors";
import { MaterialIndicator } from "react-native-indicators";
import { View, Modal, StyleSheet } from "react-native";

const LoadingModal = ({ visible }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <View style={styles.container}>
        <View style={styles.backdrop} />
        <View style={styles.loading}>
          <MaterialIndicator size={45} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    position: "absolute",
    width: Size.SCREEN_WIDTH,
    height: Size.SCREEN_HEIGHT,
    backgroundColor: Colors.black(0.5),
  },
  loading: {
    width: 110,
    height: 110,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
});

export default LoadingModal;
