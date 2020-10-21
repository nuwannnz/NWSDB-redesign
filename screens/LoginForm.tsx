import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Alert,
  TextInput,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { API_URL } from "../constants/API";
import { SCREENS } from "../constants/screens";
import { BTN_STYLE, COLORS } from "../constants/styles";

export default function LoginForm() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleErrorMSg = () => {
    if (username.length > 0) {
      setUsernameError(false);
    } else {
      setUsernameError(true);
      setModalVisible(false);
    }

    if (password.length > 0) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setModalVisible(false);
    }

    if (username.length > 0 && password.length > 0) {
      // if (username !== "A" || password !== "a") {
      //   setModalVisible(true);
      //   return;
      // }
      setModalVisible(false);

      fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.isAuth) {
            navigation.navigate(SCREENS.DASHBOARD_SCREEN);
          }
        });
    }
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subTitle}>Sign in to continue</Text>
          </View>

          <View>
            <View
              style={{
                marginBottom: 25,
              }}
            >
              <Text style={styles.inputLabel}>Username</Text>
              <TextInput
                placeholder="Ex: AnjanaKumari96"
                style={styles.input}
                onChangeText={(text) => {
                  setUsername(text);
                }}
              />
              {usernameError ? (
                <Text style={styles.errorMsg}>This field is required.</Text>
              ) : null}
            </View>
          </View>

          <View>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            {passwordError ? (
              <Text style={styles.errorMsg}>This field is required.</Text>
            ) : null}
          </View>

          <View style={{ alignItems: "center", marginTop: 20 }}>
            <View>
              <TouchableOpacity
                style={[BTN_STYLE.ACCENT_BUTTON, { width: 150 }]}
                onPress={() => {
                  handleErrorMSg();
                }}
              >
                <Text style={{ color: COLORS.textOnAccentColor }}>
                  Login Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View>
              <View style={[styles.center, { marginTop: 10 }]}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(SCREENS.FORGOT_PWD_SCREEN_1);
                  }}
                >
                  <Text
                    style={{
                      color: "#a9a9a9",
                      fontWeight: "bold",
                    }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Image
            source={require("../assets/man.png")}
            style={{
              width: 280,
              height: 190,
              position: "absolute",
              top: 400,
            }}
          />

          <View>
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 190,
                marginBottom: 8,
              }}
            >
              <Text style={{ color: "gray", marginRight: 5 }}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(SCREENS.SIGNUP_SCREEN);
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#721c24",
                    }}
                  >
                    Sorry!
                  </Text>
                  <Text style={styles.modalText}>
                    Your Username and Password are incorrect. Please try again.
                  </Text>

                  <TouchableHighlight
                    style={[
                      BTN_STYLE.ACCENT_DENGER_BUTTON,
                      { width: 80, height: 40 },
                    ]}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>OK</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 30,
    marginTop: 5,
    marginBottom: 5,
    height: 618,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 20,
    color: "#777777",
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  errorMsg: {
    fontWeight: "bold",
    fontSize: 13,
    color: "red",
  },
  inputLabel: {
    fontWeight: "bold",
    fontSize: 15,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#f8d7da",
    borderRadius: 20,
    borderColor: "#f5c6cb",
    padding: 50,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    width: 160,
    marginBottom: 20,
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#721c24",
  },
});
