import Item from "./Item";
import React from "react";
import Input from "../input/Input";
import Backdrop from "./Backdrop";
import ListEmpty from "./ListEmpty";
import { Props } from "./Picker.types";
import { Modal, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useHandler, useSnapPoints } from "./Picker.hooks";
import {
  BottomSheetModal,
  BottomSheetFlatList,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Picker = ({ data, value, onChangeValue, ...props }: Props) => {
  const [show, setShow] = React.useState(false);

  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = useSnapPoints(data);
  const { selectedLabel, manipulateData, select } = useHandler({
    data,
    value,
    onChangeValue,
  });

  const handlePresent = React.useCallback(() => {
    setShow(true);
    setTimeout(() => {
      bottomSheetModalRef.current?.present();
    }, 0);
  }, []);

  const handleDismiss = React.useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    setTimeout(() => {
      setShow(false);
    }, 300);
  }, []);

  const handleSheetChange = React.useCallback((index: number) => {
    if (index === -1) setShow(false);
  }, []);

  return (
    <>
      <Input
        {...props}
        value={selectedLabel}
        onPress={handlePresent}
        iconRight={({ size, color }) => (
          <FontAwesomeIcon
            icon={["fas", "angle-down"]}
            size={size}
            color={color}
          />
        )}
      />

      <Modal
        visible={show}
        transparent
        statusBarTranslucent
        animationType="none"
        onRequestClose={handleDismiss}
      >
        <GestureHandlerRootView style={styles.modalContainer}>
          <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
              onChange={handleSheetChange}
              backdropComponent={(props) => (
                <Backdrop {...props} onPress={handleDismiss} />
              )}
            >
              <BottomSheetFlatList
                contentContainerStyle={styles.content}
                data={manipulateData}
                initialNumToRender={10}
                windowSize={2}
                maxToRenderPerBatch={10}
                keyExtractor={(_, i) => `key.${i}`}
                getItemLayout={(_, index) => ({
                  length: 50,
                  offset: 50 * index,
                  index,
                })}
                renderItem={(props) => <Item {...props} onSelect={select} />}
                ListEmptyComponent={<ListEmpty />}
              />
            </BottomSheetModal>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
  modalContainer: {
    flex: 1,
  },
});

export default Picker;
