import React from "react";
import * as Colors from "../../utility/colors";
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
