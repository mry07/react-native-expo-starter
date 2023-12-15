import { Dispatch, SetStateAction } from "react";

export type ContextProps = {
  hasLogged: boolean;
  setHasLogged: Dispatch<SetStateAction<boolean>>;
};
