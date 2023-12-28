import Item from "./Item";
import React from "react";
import Input from "../input/Input";
import Backdrop from "./Backdrop";
import ListEmpty from "./ListEmpty";
import { Props } from "./Picker.types";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useHandler, useSnapPoints } from "./Picker.hooks";
import {
  BottomSheetModal,
  BottomSheetFlatList,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const Picker = ({ data, value, onChangeValue, ...props }: Props) => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = useSnapPoints(data);
  const { selectedLabel, manipulateData, pick } = useHandler({
    data,
    value,
    onChangeValue,
  });

  const handlePresent = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismiss = React.useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <BottomSheetModalProvider>
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

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
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
          renderItem={(props) => <Item {...props} onPick={pick} />}
          ListEmptyComponent={<ListEmpty />}
        />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
});

export default Picker;
