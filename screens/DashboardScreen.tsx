import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SCREENS } from "../constants/screens";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  pageBtnGrid: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
});

export default function DashboardScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text>Dashboard</Text>
      </View>

      <View style={styles.pageBtnGrid}>
        {/* Add dashboard buttons here */}
        <Button
          title="Interruptions"
          onPress={() => {
            navigation.navigate(SCREENS.INTERRUPTIONS_SCREEN);
          }}
        />
         <Button
          title="Complaint"
          onPress={() => {
            navigation.navigate(SCREENS.USER_COMPLAINT_SCREEN);
          }}
        />
        <View>
        <Button
          title="Meter reading"
          onPress={() => {
            navigation.navigate(SCREENS.METER_READING_SCREEN);
          }}
        />
      </View>
      </View>
      <View>
        <Button
          title="Log out"
          onPress={() => {
            navigation.navigate(SCREENS.START_SCREEN);
          }}
        />
      </View>
      
    </View>
  );
}
