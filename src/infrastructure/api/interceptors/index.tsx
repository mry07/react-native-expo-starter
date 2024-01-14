import JsonPlaceholderInterceptor from "./JsonPlaceholderInterceptor";
import { createComponentTree } from "../../../utility/component";
import DummyJsonInterceptor from "./DummyJsonInterceptor";

export default createComponentTree(
  JsonPlaceholderInterceptor,
  DummyJsonInterceptor
);
