import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { API_URL } from "../constants/API";

import { SCREENS } from "../constants/screens";
import { BTN_STYLE, COLORS } from "../constants/styles";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 30,
    marginTop: 5,
    marginBottom: 5,
    height: 618,
  },
  input: {
    height: 33,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 10,
  },
  errorMsg: {
    fontWeight: "bold",
    fontSize: 10,
    color: "red",
  },
  inputLabel: {
    fontWeight: "bold",
    fontSize: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default function SignUpScreen() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nic, setNic] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [conformPwd, setConformPwd] = useState<string>("");
  const [fullNameError, setFullNameError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nicError, setnicError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [conformPwdError, setConformPwdError] = useState(false);
  const [matchPwd, setMatchPwd] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const validateSignOut = () => {
    let isValid = true;
    if (fullName.length > 0) {
      setFullNameError(false);
    } else {
      setFullNameError(true);
      isValid = false;
    }
    if (name.length > 0) {
      setNameError(false);
    } else {
      setNameError(true);
      isValid = false;
    }

    if (email.length > 0) {
      setEmailError(false);
    } else {
      setEmailError(true);
      isValid = false;
    }

    if (nic.length > 0) {
      setnicError(false);
    } else {
      setnicError(true);
      isValid = false;
    }

    if (mobile.length > 0) {
      setMobileError(false);
    } else {
      setMobileError(true);
      isValid = false;
    }

    if (password.length > 0) {
      setPwdError(false);
    } else {
      setPwdError(true);
      isValid = false;
    }

    if (conformPwd.length > 0) {
      setConformPwdError(false);
    } else {
      setConformPwdError(true);
      isValid = false;
    }

    if (password !== conformPwd) {
      setMatchPwd(true);
      setConformPwdError(false);
      isValid = false;
    } else {
      setMatchPwd(false);
    }

    if (isValid) {
      setIsLoading(true);
      fetch(`${API_URL}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username: name,
          email,
          nic,
          mobile,
          password,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setIsLoading(false);
          if (result.status) {
            navigation.navigate(SCREENS.LOGIN_SCREEN);
          }
        });
    }
  };

  return (
    <ScrollView>

       {isLoading ?

        <View style={[styles.center, { width: "100%", height: "75%", backgroundColor: "white" }]}>
          <Image
            style={{
              width: 250,
              height: 250,
            }}
            source={require("../assets/loading3.gif")}
          />
        </View>
          : null
          }


      <View style={{ backgroundColor: "white", position: "relative" }}>
        <Image
          source={require("../assets/r1.png")}
          style={{
            width: 620,
            height: 700,
            position: "absolute",
            bottom: 70,
            left: 170,
            right: 0,
            zIndex: 800,
          }}
        />

        <View style={[styles.container, { zIndex: 900 }]}>
          <View>
            <Text style={styles.title}>Create Account</Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              placeholder="Ex: Anjana Kumari"
              style={styles.input}
              onChangeText={(text) => {
                setFullName(text);
              }}
            />
            {fullNameError ? (
              <Text style={styles.errorMsg}>This field is required.</Text>
            ) : null}
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              placeholder="Ex: AnjanaK123"
              style={styles.input}
              onChangeText={(text) => {
                setName(text);
              }}
            />
            {nameError ? (
              <Text style={styles.errorMsg}>This field is required.</Text>
            ) : null}
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              placeholder="Ex: anjanak123@gmail.com"
              style={styles.input}
              keyboardType="email-address"
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
            {emailError ? (
              <Text style={styles.errorMsg}>This field is required.</Text>
            ) : null}
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.inputLabel}>NIC Number</Text>
            <TextInput
              placeholder="Ex: 9930281613V"
              style={styles.input}
              onChangeText={(text) => {
                setNic(text);
              }}
              maxLength={12}
            />
            {nicError ? (
              <Text style={styles.errorMsg}>This field is required.</Text>
            ) : null}
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.inputLabel}>Mobile Number</Text>
            <TextInput
              placeholder="Ex: 07XXXXXXXX"
              keyboardType="number-pad"
              style={styles.input}
              onChangeText={(text) => {
                setMobile(text);
              }}
              maxLength={10}
            />
            {mobileError ? (
              <Text style={styles.errorMsg}>This field is required.</Text>
            ) : null}
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            {pwdError ? (
              <Text style={styles.errorMsg}>This field is required.</Text>
            ) : null}
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.inputLabel}>Re-enter new password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(text) => {
                setConformPwd(text);
              }}
            />
            {conformPwdError ? (
              <Text style={styles.errorMsg}>This field is required.</Text>
            ) : null}
            {matchPwd ? (
              <Text style={styles.errorMsg}>Passwords are not matching.</Text>
            ) : null}
          </View>
          <View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 40,
                  marginBottom: 10,
                  marginTop: 0,
                  backgroundColor: COLORS.accentColor,
                  borderRadius: 4,

                  elevation: 3,
                }}
                onPress={() => {
                  validateSignOut();
                }}
              >
                <Text
                  style={{
                    color: COLORS.textOnAccentColor,
                    textAlign: "center",
                    paddingTop: 7,
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "gray", marginRight: 5 }}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(SCREENS.LOGIN_SCREEN);
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
