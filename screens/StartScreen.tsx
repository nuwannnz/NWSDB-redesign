import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SCREENS } from "../constants/screens";
import { BTN_STYLE, COLORS } from "../constants/styles";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 30,
    marginBottom: 5,
    height: 618,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 17,
    color: "#777777",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fullHeight: {
    height: "100%",
  },
  bottomBtnWrap: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  btn: {
    flex: 1,
  },
});

export default function StartScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.center}>
            <Image
              style={{
                width: 400,
                height: 300,
              }}
              source={require("../assets/welcome2.gif")}
            />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Hello</Text>
          <Text style={styles.subTitle}>
            Welcome to NWSDB selfcare app to manage real estate needs.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 80,
            marginBottom: 40,
          }}
        >
          <View>
            <TouchableOpacity
              style={[BTN_STYLE.ACCENT_BUTTON, { width: 130 }]}
              onPress={() => {
                navigation.navigate(SCREENS.LOGIN_SCREEN);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[BTN_STYLE.ACCENT_BUTTON, { width: 130 }]}
              onPress={() => navigation.navigate(SCREENS.SIGNUP_SCREEN)}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
