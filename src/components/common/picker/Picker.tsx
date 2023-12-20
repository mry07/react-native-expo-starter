import Item from "./Item";
import React from "react";
import Input from "../input/Input";
import Backdrop from "./Backdrop";
import ListEmpty from "./ListEmpty";
import { Props } from "./Picker.types";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const Picker = ({ data, value, onChangeValue, ...props }: Props) => {
  const [newData, setNewData] = React.useState([]);

  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const snapPoints = React.useMemo(() => {
    const result = ["25%"];
    if (data.length > 0) result.push("50%");

    return result;
  }, [data]);

  React.useEffect(() => {
    setNewData(
      data.map((e) => ({
        ...e,
        selected: e.value === value,
      }))
    );
  }, [data, value]);

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
          keyExtractor={(_, i) => `key.${i}`}
          getItemLayout={(_, index) => ({
            length: 50,
            offset: 50 * index,
            index,
          })}
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
