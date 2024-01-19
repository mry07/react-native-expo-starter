import { AuthProvider } from "./auth-context";
import { createComponentTree } from "../../utility/component";
import { NotificationProvider } from "./notification-context";

export default createComponentTree(AuthProvider, NotificationProvider);
