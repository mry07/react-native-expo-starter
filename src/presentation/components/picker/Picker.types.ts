import { Props as InputProps } from "../input/Input.types";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { ListRenderItemInfo } from "react-native";

export type Data = {
  label: string;
  value: string;
  selected?: boolean;
};

export type ItemProps = ListRenderItemInfo<Data> & {
  onSelect: (index: number) => void;
};

export type BackdropProps = BottomSheetBackdropProps & {
  onPress: () => void;
};

export type Props = Omit<
  InputProps,
  "value" | "onPress" | "onIconLeftPress" | "onIconRightPress"
> & {
  data: Data[];
  value?: string;
  onChangeValue?: (value: string) => void;
};

export type UseHandlerParams = Pick<Props, "data" | "value" | "onChangeValue">;

export type UseHandlerResult = {
  selectedLabel: string;
  manipulateData: Data[];
  select: (index: number) => void;
};
