import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { SCREENS } from "../constants/screens";

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Sign up</Text>
      <Button
        title="Sign up"
        onPress={() => {
          navigation.navigate(SCREENS.LOGIN_SCREEN);
        }}
      />
    </View>
  );
}
