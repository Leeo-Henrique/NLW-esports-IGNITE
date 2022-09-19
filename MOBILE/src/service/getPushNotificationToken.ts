import * as Notification from "expo-notifications";

export const GetPushNotificationToken = async () => {
  const { granted } = await Notification.getPermissionsAsync();
  if (!granted) {
    await Notification.requestPermissionsAsync();
  }
  if (granted) {
    const pushToken = await Notification.getExpoPushTokenAsync();
  }
};
