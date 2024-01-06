import React from "react";
import { Data, UseHandlerParams, UseHandlerResult } from "./Picker.types";

export const useSnapPoints = (data: Data[]) => {
  const result = React.useMemo(() => {
    const result = ["25%"];
    if (data.length > 0) result.push("50%");

    return result;
  }, [data]);

  return result;
};

export const useHandler = ({
  data,
  value,
  onChangeValue,
}: UseHandlerParams): UseHandlerResult => {
  const [manipulateData, setManipulateData] = React.useState([]);

  const selectedLabel = React.useMemo(
    () => manipulateData.find((e) => e.selected)?.label,
    [manipulateData, value]
  );

  React.useEffect(() => {
    setManipulateData(data.map((e) => ({ ...e, selected: e.value === value })));
  }, [data, value]);

  const select = React.useCallback(
    (index) => {
      setManipulateData((s) => {
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

  return { selectedLabel, manipulateData, select };
};
