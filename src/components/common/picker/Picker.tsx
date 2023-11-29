import React from "react";
import Input from "../input/Input";
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Backdrop from "./Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Props } from "./Picker.types";
import Item from "./Item";
import ListEmpty from "./ListEmpty";
import { StyleSheet } from "react-native";

const Picker = ({ data, value, onChangeValue, ...props }: Props) => {
  const [newData, setNewData] = React.useState([]);

  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  React.useEffect(() => {
    setNewData(
      data.map((e) => ({
        ...e,
        selected: e.value === value,
      }))
    );
  }, [data, value]);

  const snapPoints = React.useMemo(() => {
    const result = ["25%"];
    if (data.length > 0) result.push("50%");

    return result;
  }, [data]);

  const handlePresent = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismiss = React.useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handlePick = React.useCallback(
    (index: number) => {
      setNewData((s) => {
        return s.map((e, i) => {
          if (i !== index) {
            if (e.selected === false) {
              return e;
            }

            return { ...e, selected: false };
          }

          return { ...e, selected: true };
        });
      });

      onChangeValue?.(data[index].value);
    },
    [data]
  );

  return (
    <BottomSheetModalProvider>
      <Input
        {...props}
        value={newData.find((e) => e.selected)?.label}
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
          data={newData}
          initialNumToRender={10}
          windowSize={2}
          maxToRenderPerBatch={10}
          getItemLayout={(_, index) => ({
            length: 50,
            offset: 50 * index,
            index,
          })}
          keyExtractor={(_, i) => `key.${i}`}
          renderItem={(props) => <Item {...props} onPick={handlePick} />}
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
