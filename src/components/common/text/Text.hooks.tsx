import React from "react";
import { UseFontFamilyParams } from "./Text.types";

export const useFontFamily = (params: UseFontFamilyParams): string => {
  const result = React.useMemo(
    () => `${params.font}-${params.weight}-${params.variant}`,
    [params]
  );

  return result;
};
