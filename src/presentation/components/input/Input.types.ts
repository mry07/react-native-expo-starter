import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import { Props as TextProps } from "../text/Text.types";

type IconProps = {
  size?: number;
  color?: string;
};

type Icon = ({ size, color }: IconProps) => React.ReactNode;

type Press = () => void;

export type Props = Omit<TextProps & TextInputProps, "style"> & {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  label?: string;
  error?: string;
  iconLeft?: Icon;
  iconRight?: Icon;
  onPress?: Press;
  onIconLeftPress?: Press;
  onIconRightPress?: Press;
};
