import React from "react";
import * as Notifications from "expo-notifications";
import { registerPushNotification } from "./register";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Notification = ({ children }) => {
  const receivedListener = React.useRef(null);
  const interactsListener = React.useRef(null);

  React.useEffect(() => {
    /**
     * Register for push notifications
     */
    registerPushNotification().then((token) => {
      console.log("token", token);
    });

    receivedListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        // called whenever a notification is received while the app is running.
      }
    );

    interactsListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        // called whenever a user interacts with a notification (for example, taps on it).
      });

    /**
     * Remove all listeners on unmount
     */
    return () => {
      Notifications.removeNotificationSubscription(receivedListener.current);
      Notifications.removeNotificationSubscription(interactsListener.current);
    };
  }, []);

  return children;
};

export default Notification;
