import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color, floor } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { SCREENS } from "../constants/screens";
import { BTN_STYLE, COLORS } from "../constants/styles";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  fullHeight: {
    height: "100%",
  },
  bottomBtnWrap: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  btn: {
    flex: 1,
    padding: 30,
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  para: {
    width: 200,
    textAlign: "center",
  },
  introText: {
    display: "flex",
    alignItems: "center",
  },
});

export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, styles.fullHeight]}>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 350,
            width: 200,
            backgroundColor: "pink",
            marginTop: 20,
          }}
        ></View>
      </View>
      <View style={styles.introText}>
        <Text style={styles.mainText}>Hello</Text>
        <Text style={styles.para}>
          Welcome to NWSDB selfcare app to manage real estate needs.
        </Text>
      </View>

      <View style={styles.fixToText}>
        <View style={styles.btn}>
          <TouchableOpacity
            style={BTN_STYLE.ACCENT_BUTTON}
            onPress={() => {
              navigation.navigate(SCREENS.LOGIN_SCREEN);
            }}
          >
            <Text style={{ color: COLORS.textOnAccentColor }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={BTN_STYLE.ACCENT_BUTTON}
            onPress={() => navigation.navigate(SCREENS.SIGNUP_SCREEN)}
          >
            <Text style={{ color: COLORS.textOnAccentColor }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
