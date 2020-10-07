import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "./constants/screens";
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import DashboardScreen from "./screens/DashboardScreen";
import InterruptionsScreen from "./screens/InterruptionsScreen";
import UserComplaintScreen from "./screens/UserComplaintScreen";
import ComplaintsNavigator from "./components/complaintments/ComplaintsNavigator";
import MeterReadingScreen from "./screens/MeterReadingScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.START_SCREEN}
          component={StartScreen}
          options={{ title: "Start screen" }}
        />
        <Stack.Screen name={SCREENS.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={SCREENS.SIGNUP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={SCREENS.USER_COMPLAINT_SCREEN} component={ComplaintsNavigator} />
        <Stack.Screen name={SCREENS.METER_READING_SCREEN} component={MeterReadingScreen} />
        <Stack.Screen
          name={SCREENS.DASHBOARD_SCREEN}
          component={DashboardScreen}
        />
        <Stack.Screen
          name={SCREENS.INTERRUPTIONS_SCREEN}
          component={InterruptionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
