import React from "react";
import {
  View,
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import * as Colors from "../../../utility/colors";
import Text from "../text/Text";
import { useDynamicLayout } from "./Button.hooks";
import { Options, Props } from "./Button.types";

const Button = React.forwardRef<View, Props>(
  (
    {
      style,
      title,
      size,
      color,
      outline,
      options = {},
      iconLeft,
      iconRight,
      ...props
    },
    ref
  ) => {
    const defaultOptions: Options = {
      titleColor: outline
        ? color
        : Colors.isBright(color)
        ? Colors.black()
        : Colors.white(),
      titleWeight: "400",
    };

    options = { ...defaultOptions, ...options };

    const dynamicLayout = useDynamicLayout({
      title,
      size,
      options,
      iconLeft,
      iconRight,
    });

    const containerStyle: StyleProp<ViewStyle> = [
      styles.container,
      dynamicLayout.styles.container,
      { backgroundColor: outline ? "transparent" : color, borderColor: color },
      style,
    ];

    return (
      <Pressable ref={ref} style={containerStyle} {...props}>
        {iconLeft && (
          <View style={dynamicLayout.styles.iconLeft}>
            {iconLeft(dynamicLayout.iconSize)}
          </View>
        )}
        <Text
          size={dynamicLayout.titleSize}
          weight={options.titleWeight}
          color={options.titleColor}
          align="center"
        >
          {title}
        </Text>
        {iconRight && (
          <View style={dynamicLayout.styles.iconRight}>
            {iconRight(dynamicLayout.iconSize)}
          </View>
        )}
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

Button.defaultProps = {
  size: "medium",
  color: Colors.grey(undefined, "900"),
  outline: false,
};

export default Button;

// import {
//   View,
//   Pressable,
//   StyleProp,
//   ViewStyle,
//   StyleSheet,
// } from "react-native";
// import React from "react";
// import { Options, Props } from "./Button.types";
// import { useDynamicStyles } from "./Button.hooks";
// import * as Colors from "../../../utils/colors";
// import Text from "../text/Text";

// const Button = React.forwardRef<View, Props>(
//   (
//     { style, title, size, color, options, iconLeft, iconRight, ...props },
//     ref
//   ) => {
//     const defaultOptions: Options = {
//       titleColor: Colors.white(),
//       titleWeight: "400",
//     };

//     const finalOptions = { ...defaultOptions, ...options };

//     const dynamicStyles = useDynamicStyles({
//       title,
//       size,
//       options: finalOptions,
//       iconLeft,
//       iconRight,
//     });

//     const containerStyle: StyleProp<ViewStyle> = [
//       styles.container,
//       dynamicStyles.containerStyle,
//       { backgroundColor: color },
//       style,
//     ];

//     return (
//       <Pressable {...props} ref={ref} style={containerStyle}>
//         {iconLeft && (
//           <View style={dynamicStyles.iconLeftStyle}>
//             {iconLeft(dynamicStyles.iconSize)}
//           </View>
//         )}
//         <Text
//           style={styles.title}
//           size={dynamicStyles.titleSize}
//           color={finalOptions.titleColor}
//           weight={finalOptions.titleWeight}
//         >
//           {title}
//         </Text>
//         {iconRight && (
//           <View style={dynamicStyles.iconRightStyle}>
//             {iconRight(dynamicStyles.iconSize)}
//           </View>
//         )}
//       </Pressable>
//     );
//   }
// );

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Colors.grey(undefined, "900"),
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   title: {
//     textAlign: "center",
//   },
// });

// Button.defaultProps = {
//   size: "medium",
//   options: {},
// };

// export default Button;
