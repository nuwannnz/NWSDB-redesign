import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { SCREENS } from "../constants/screens";

export default function LoginScreen() {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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

  return (
    <View>
      <Text style={styles.mainText}>Welcome Back!</Text>
      <Text>Sign in to continue</Text>

      <Button
        title="Login"
        onPress={() => {
          navigation.navigate(SCREENS.DASHBOARD_SCREEN);
        }}
      />
    </View>
  );
}
