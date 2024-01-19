import * as Notifications from "expo-notifications";

export type ContextProps = {
  pushToken: string;
  received: Notifications.Notification;
  interact: Notifications.NotificationResponse;
};
