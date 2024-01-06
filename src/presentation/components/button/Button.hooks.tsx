import React from "react";
import { DynamicLayout, Props } from "./Button.types";

export const useDynamicLayout = ({
  title,
  size,
  options,
  iconLeft,
  iconRight,
}: Props) => {
  const result = React.useMemo<DynamicLayout>(() => {
    let pl;
    let pr;
    let ml = 0;
    let mr = 0;

    switch (size) {
      case "small":
        if (title) {
          if (iconLeft) {
            pl = 12;
            mr = 4;
          }

          if (iconRight) {
            pr = 12;
            ml = 4;
          }
        } else {
          pl = 8;
          pr = 8;
        }

        return {
          styles: {
            container: {
              height: 32,
              minWidth: 32,
              paddingLeft: pl || 16,
              paddingRight: pr || 16,
            },
            iconLeft: {
              marginRight: mr,
            },
            iconRight: {
              marginLeft: ml,
            },
          },
          iconSize: 16,
          titleSize: options.titleSize || 14,
        };
      case "medium":
        if (title) {
          if (iconLeft) {
            pl = 20;
            mr = 8;
          }

          if (iconRight) {
            pr = 20;
            ml = 8;
          }
        } else {
          pl = 12;
          pr = 12;
        }

        return {
          styles: {
            container: {
              height: 44,
              minWidth: 44,
              paddingLeft: pl || 24,
              paddingRight: pr || 24,
            },
            iconLeft: {
              marginRight: mr,
            },
            iconRight: {
              marginLeft: ml,
            },
          },
          iconSize: 20,
          titleSize: options.titleSize || 16,
        };
      case "large":
        if (title) {
          if (iconLeft) {
            pl = 24;
            mr = 8;
          }

          if (iconRight) {
            pr = 24;
            ml = 8;
          }
        } else {
          pl = 14;
          pr = 14;
        }

        return {
          styles: {
            container: {
              height: 52,
              minWidth: 52,
              paddingLeft: pl || 32,
              paddingRight: pr || 32,
            },
            iconLeft: {
              marginRight: mr,
            },
            iconRight: {
              marginLeft: ml,
            },
          },
          iconSize: 24,
          titleSize: options.titleSize || 16,
        };
    }
  }, [title, size, options, iconLeft, iconRight]);

  return result;
};
