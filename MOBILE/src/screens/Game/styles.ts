import { Inter_100Thin } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: Inter_100Thin,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 32,
    alignItems: "center",
    marginTop: 28,
    justifyContent: "space-between",
  },
  logo: {
    width: 72,
    height: 40,
  },
  right: {
    width: 20,
    height: 20,
  },
  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: "flex-start",
  },
  containerList: {
    width: "100%",
  },
});
