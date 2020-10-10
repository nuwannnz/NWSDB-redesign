import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";

import { SCREENS } from "../constants/screens";
import { BTN_STYLE, COLORS } from "../constants/styles";

export default function ForgotPwdStep2() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [otp, setOtp] = useState<string>(" ");

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      margin: 30,
      marginTop: 5,
      marginBottom: 5,
      height: 618,
    },
    title: {
      fontWeight: "bold",
      fontSize: 30,
      textAlign: "center",
      marginTop: 40,
    },
    subTitle: {
      width: 300,
      fontSize: 16,
      color: "#777777",
      fontWeight: "bold",
      textAlign: "center",
    },
    input: {
      height: 50,
      borderColor: "gray",
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
    inputLabel: {
      fontWeight: "bold",
      fontSize: 15,
      marginTop: 20,
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      marginBottom: 15,
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

  const validateOTP = () => {
    if (otp?.length !== 4) {
      setModalVisible(true);
      setOtp(" ");
      return;
    }
    navigation.navigate(SCREENS.FORGOT_PWD_SCREEN_3);
    setModalVisible(false);
    setOtp(" ");
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.center}>
              <Image
                style={{
                  width: 250,
                  height: 250,
                }}
                source={require("../assets/otpVerify.gif")}
              />
            </View>
          </View>

          <View>
            <View>
              <Text style={styles.title}>Verification</Text>
              <Text style={styles.subTitle}>Your will get a OTP via SMS.</Text>
            </View>

            <View style={{ marginBottom: 20 }}>
              <Text style={styles.inputLabel}>OTP Code</Text>
              <TextInput
                keyboardType="number-pad"
                style={styles.input}
                onChangeText={(text) => {
                  setOtp(text);
                }}
                maxLength={4}
              />
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
                      You entered OTP code is incorrect. Please try resend OTP.
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

              <TouchableHighlight
                style={[BTN_STYLE.ACCENT_BUTTON, { width: 150 }]}
                onPress={() => {
                  validateOTP();
                }}
              >
                <Text style={{ color: COLORS.textOnAccentColor }}>Verify</Text>
              </TouchableHighlight>
            </View>

            <View>
              <View style={styles.center}>
                <View
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 50,
                  }}
                >
                  <Text style={{ color: "gray", marginRight: 5 }}>
                    Didn't receive the verification OTP?
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(SCREENS.FORGOT_PWD_SCREEN_2);
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>Resend Again</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
