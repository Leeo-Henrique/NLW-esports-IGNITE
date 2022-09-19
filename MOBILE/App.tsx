import { useRef, useEffect } from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { Subscription } from "expo-modules-core";
import { Background } from "./src/components/Background";
import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import * as Notification from "expo-notifications";

import "./src/service/notificationConfigs";
import { GetPushNotificationToken } from "./src/service/getPushNotificationToken";

export default function App() {
  const [fontsLoade] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });
  const getNotificationListener = useRef<Subscription>();
  const resNotificationListener = useRef<Subscription>();

  useEffect(() => {
    GetPushNotificationToken();
  });

  useEffect(() => {
    getNotificationListener.current =
      Notification.addNotificationReceivedListener(
        (notification) => notification
      );

    resNotificationListener.current =
      Notification.addNotificationResponseReceivedListener(
        (notification) => notification
      );

    return () => {
      if (getNotificationListener.current && resNotificationListener.current) {
        Notification.removeNotificationSubscription(
          resNotificationListener.current
        );
        Notification.removeNotificationSubscription(
          getNotificationListener.current
        );
      }
    };
  }, []);
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoade ? <Routes /> : <Loading />}
    </Background>
  );
}
