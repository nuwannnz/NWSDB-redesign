import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { SCREENS } from "../constants/screens";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login</Text>

      <Button
        title="Login"
        onPress={() => {
          navigation.navigate(SCREENS.DASHBOARD_SCREEN);
        }}
      />
    </View>
  );
}
