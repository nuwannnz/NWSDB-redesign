import React from "react";
import { Image, Text, View } from "react-native";

export default function Header(props: any) {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Image
        style={{ width: 48, height: 48 }}
        source={require("../../assets/logo.png")}
      />
      <Text>{props.children}</Text>
    </View>
  );
}
