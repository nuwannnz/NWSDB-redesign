import React from "react";
import { Image, Text, View } from "react-native";

export default function Header(props: any) {
  return (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Image
        style={{ width: 48, height: 48, marginLeft: -12 }}
        source={require("../../assets/logo.png")}
      />
      <Text
        style={{
          fontSize: 18,
          marginLeft: 5,
          fontWeight: "bold",
          color: "#333",
        }}
      >
        {props.children}
      </Text>
    </View>
  );
}
