import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { SCREENS } from "../constants/screens";

export default function InterruptionsScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Interruptions</Text>

      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
