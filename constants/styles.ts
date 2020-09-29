import { StyleSheet } from "react-native";

export const COLORS = {
  accentColor: "#1976D2",
  textOnAccentColor: "#fff",
};

export const BTN_STYLE = StyleSheet.create({
  ACCENT_BUTTON: {
    height: 48,
    backgroundColor: COLORS.accentColor,
    borderRadius: 4,
    elevation: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
