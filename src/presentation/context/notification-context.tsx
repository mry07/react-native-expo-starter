import React from "react";
import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import { ContextProps } from "./notification-context.types";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const NotificationContext = React.createContext<ContextProps>(null);

const registerForPushNotificationsAsync = async () => {
  let pushToken;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status === "granted") {
      pushToken = await (
        await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig.extra.eas.projectId,
        })
      ).data;
    }
  }

  return pushToken;
};

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const NotificationProvider = ({ children }) => {
  const [pushToken, setPushToken] = React.useState(null);
  const [received, setReceived] = React.useState(null);
  const [interact, setInteract] = React.useState(null);

  const receivedListener = React.useRef(null);
  const interactListener = React.useRef(null);

  const contextValue = React.useMemo<ContextProps>(
    () => ({
      pushToken,
      received,
      interact,
    }),
    [pushToken, received, interact]
  );

  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      setPushToken(token);
    });

    receivedListener.current = Notifications.addNotificationReceivedListener(
      (response) => {
        setReceived(response);
      }
    );

    interactListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        setInteract(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(receivedListener.current);
      Notifications.removeNotificationSubscription(interactListener.current);
    };
  }, []);

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
