import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SCREENS } from "../constants/screens";
import { COLORS } from "../constants/styles";

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
  btn: {
    flex: 1,
  },
});

export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, styles.fullHeight]}>
      <View>
        <Text>Welcome</Text>
      </View>
      <View style={styles.bottomBtnWrap}>
        <View style={styles.btn}>
          <Button
            title="Sign up"
            color={COLORS.accentColor}
            onPress={() => {
              navigation.navigate(SCREENS.SIGNUP_SCREEN);
            }}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Login in"
            color={COLORS.accentColor}
            onPress={() => {
              navigation.navigate(SCREENS.LOGIN_SCREEN);
            }}
          />
        </View>
      </View>
    </View>
  );
}
