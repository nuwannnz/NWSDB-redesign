import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS } from "./constants/screens";
import StartScreen from "./screens/StartScreen";
import DashboardScreen from "./screens/DashboardScreen";
import InterruptionsScreen from "./screens/InterruptionsScreen";
import Header from "./components/header/Header";
import BillingHistoryScreen from "./screens/BillingHistoryScreen";
import ForgotPwdStep1 from "./screens/ForgotPwdStep1";
import ForgotPwdStep2 from "./screens/ForgotPwdStep2";
import ForgotPwdStep3 from "./screens/ForgotPwdStep3";
import SignUpScreen from "./screens/SignUpScreen";
import LoginForm from "./screens/LoginForm";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: (props) => <Header {...props} />,
          headerLeft: (props) => null,
        }}
      >
        <Stack.Screen
          name={SCREENS.START_SCREEN}
          component={StartScreen}
          options={{ title: "NWSDB" }}
        />
        <Stack.Screen
          name={SCREENS.LOGIN_SCREEN}
          component={LoginForm}
          options={{ title: "NWSDB" }}
        />
        <Stack.Screen
          name={SCREENS.SIGNUP_SCREEN}
          component={SignUpScreen}
          options={{ title: "NWSDB" }}
        />
        <Stack.Screen
          name={SCREENS.DASHBOARD_SCREEN}
          options={{ title: "Dashboard" }}
          component={DashboardScreen}
        />
        <Stack.Screen
          name={SCREENS.INTERRUPTIONS_SCREEN}
          options={{ title: "Interruptions" }}
          component={InterruptionsScreen}
        />
        <Stack.Screen
          name={SCREENS.BILLING_SCREEN}
          options={{ title: "Billing history" }}
          component={BillingHistoryScreen}
        />
        <Stack.Screen
          name={SCREENS.FORGOT_PWD_SCREEN_1}
          component={ForgotPwdStep1}
          options={{ title: "NWSDB" }}
        />
        <Stack.Screen
          name={SCREENS.FORGOT_PWD_SCREEN_2}
          component={ForgotPwdStep2}
          options={{ title: "NWSDB" }}
        />
        <Stack.Screen
          name={SCREENS.FORGOT_PWD_SCREEN_3}
          component={ForgotPwdStep3}
          options={{ title: "NWSDB" }}
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
