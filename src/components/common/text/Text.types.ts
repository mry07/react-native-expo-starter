import { ColorValue, TextProps } from "react-native";

export type Font = "poppins";

export type Variant = "normal" | "italic";

export type Align = "left" | "center" | "right";

export type Weight =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type Props = TextProps & {
  size?: number;
  color?: ColorValue;
  font?: Font;
  align?: Align;
  weight?: Weight;
  variant?: Variant;
};

export type UseFontFamilyParams = Pick<Props, "font" | "weight" | "variant">;
