import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Text, View, StyleSheet, ImageBackground } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { SCREENS } from "../constants/screens";
import { BTN_STYLE, COLORS } from "../constants/styles";

export default function ForgotPwdStep3() {
  const navigation = useNavigation();
   const [pwd, setPwd] = useState<string>("");
  const [conformPwd, setConformPwd] = useState<string>("");
  const [pwdError, setPwdError] = useState(false);
  const [conformPwdError, setconformPwdError] = useState(false);
  const [matchPwd, setMatchPwd] = useState(false);

   const handleErrorMSg = () => {
    if (pwd.length > 0) {
      setPwdError(false);
    } else { 
      setPwdError(true); 
     
    }

    if (conformPwd.length > 0) {
      setconformPwdError(false);
      setMatchPwd(false);
    } else  {
      setconformPwdError(true);
      
    }

    if (pwd.length > 0 && conformPwd.length > 0) {
      if (pwd !== conformPwd) {
        setMatchPwd(true);
        return;
      } 
      setMatchPwd(false);
      navigation.navigate(SCREENS.LOGIN_SCREEN);
    
    }

  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Reset Your Password</Text>
            <Text style={styles.subTitle}>
              Please choose a new password to finish signing in.
            </Text>
          </View>
          <View>
            <View style={{marginBottom: 25}}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Password</Text>
              <TextInput secureTextEntry={true} style={styles.input} onChangeText={text => {setPwd(text)}} />
              {pwdError ? <Text style={styles.errorMsg}>This field is required.</Text> : null}
            </View>

            <View style={{marginBottom: 25}}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Re-enter new password
              </Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={text => {setConformPwd(text)}}
              />
              {conformPwdError ? <Text style={styles.errorMsg}>This field is required.</Text> : null}
              {matchPwd ? <Text style={styles.errorMsg}>Passwords are not matching.</Text> : null}
              
            </View>
            <View style={styles.center}>
              <TouchableOpacity
                style={[BTN_STYLE.ACCENT_BUTTON, { width: 150 }]}
                onPress={() => {
                  handleErrorMSg();
                }}
              >
                <Text style={{ color: COLORS.textOnAccentColor }}>
                  Change Password
                </Text>
              </TouchableOpacity>
            </View>
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
      height: 618,
    },
    title: {
      fontWeight: "bold",
      fontSize: 30,
    },
    subTitle: {
      width: 300,
      fontSize: 16,
      color: "#777777",
      fontWeight: "bold",
      marginBottom: 20,
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
    errorMsg: {
      fontWeight: "bold",
      fontSize: 13,
      color: "red",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });