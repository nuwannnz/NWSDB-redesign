import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Button,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
} from "react-native";
import { SCREENS } from "../constants/screens";
import Icon from "react-native-vector-icons/FontAwesome";
import { BTN_STYLE, COLORS } from "../constants/styles";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

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
    width: "100%",
    justifyContent: "space-between",
    minHeight: 115,
  },
  pageBtnWrap: {
    backgroundColor: COLORS.accentColor,
    padding: 0,
    borderRadius: 5,
    minWidth: "100%",
    maxWidth: "30%",
    minHeight: 100,
    maxHeight: 100,
  },
  pageBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    height: "100%",
    width: "100%",
  },
  navIconBtn: {
    backgroundColor: COLORS.accentColor,
    height: 30,
    paddingLeft: 20,
  },
  navIconText: {
    padding: 5,
    paddingTop: 0,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 11,
    textAlign: "center",
  },
  navBtnWrap: {
    width: 65,
    padding: 0,
  },
  profileIconCenter: {
    backgroundColor: COLORS.accentColor,
    height: 30,
    paddingLeft: 23,
  },
  aboutUsCenter: {
    backgroundColor: COLORS.accentColor,
    height: 30,
    paddingLeft: 25,
  },
  serviceCenter: {
    backgroundColor: COLORS.accentColor,
    height: 30,
    paddingLeft: 15,
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
    backgroundColor: "#fff3cd",
    borderRadius: 20,
    borderColor: "#ffeeba",
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
    color: "#856404",
  },
});

export default function DashboardScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.pageBtnGrid}>
          {/* Add dashboard buttons here */}

          <TouchableNativeFeedback
            style={styles.pageBtnWrap}
            onPress={() => {
              navigation.navigate(SCREENS.INTERRUPTIONS_SCREEN);
            }}
          >
            <View style={styles.pageBtn}>
              <Icon name="flash" color="#fff" size={30} />
              <Text style={{ color: "#fff" }}>Interruptions</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            style={styles.pageBtnWrap}
            onPress={() => {
              navigation.navigate(SCREENS.BILLING_HISTORY_SCREEN);
            }}
          >
            <View style={styles.pageBtn}>
              <Icon name="undo" color="#fff" size={30} />
              <Text style={{ color: "#fff" }}>Billing history</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            style={styles.pageBtnWrap}
            onPress={() => {
              navigation.navigate(SCREENS.USER_COMPLAINT_SCREEN);
            }}
          >
            <View style={styles.pageBtn}>
              <Icon name="bullhorn" color="#fff" size={30} />
              <Text style={{ color: "#fff" }}>Complaint</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        <View style={styles.pageBtnGrid}>
          <TouchableNativeFeedback
            style={styles.pageBtnWrap}
            onPress={() => {
              navigation.navigate(SCREENS.METER_READING_SCREEN);
            }}
          >
            <View style={styles.pageBtn}>
              <Icon name="dashboard" color="#fff" size={30} />
              <Text style={{ color: "#fff" }}>Meter reading</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            style={styles.pageBtnWrap}
            onPress={() => {
              navigation.navigate(SCREENS.MANAGE_ACCOUNTS);
            }}
          >
            <View style={styles.pageBtn}>
              <Icon name="sign-in" color="#fff" size={30} />
              <Text style={{ color: "#fff" }}>Accounts</Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            style={styles.pageBtnWrap}
            onPress={() => {
              navigation.navigate(SCREENS.EBILL_SERVICES);
            }}
          >
            <View style={styles.pageBtn}>
              <Icon name="euro" color="#fff" size={30} />
              <Text style={{ color: "#fff" }}>E-Bill Service</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 56,
          backgroundColor: COLORS.accentColor,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
          paddingBottom: 0,
        }}
      >
        <View style={styles.navBtnWrap}>
          <Icon.Button
            name="home"
            color="#fff"
            size={30}
            style={styles.navIconBtn}
            onPress={() => {
              navigation.navigate(SCREENS.DASHBOARD_SCREEN);
            }}
          />
          <Text style={styles.navIconText}>Home</Text>
        </View>

        <View style={styles.navBtnWrap}>
          <Icon.Button
            name="cogs"
            color="#fff"
            size={30}
            style={styles.serviceCenter}
            onPress={() => {
              navigation.navigate(SCREENS.DASHBOARD_SCREEN);
            }}
          />
          <Text style={styles.navIconText}>Services</Text>
        </View>
        <View style={styles.navBtnWrap}>
          <Icon.Button
            name="user"
            color="#fff"
            size={30}
            style={styles.profileIconCenter}
            onPress={() => {
              navigation.navigate(SCREENS.DASHBOARD_SCREEN);
            }}
          />
          <Text style={styles.navIconText}>Profile</Text>
        </View>

        <View style={styles.navBtnWrap}>
          <Icon.Button
            name="info"
            color="#fff"
            size={30}
            style={styles.aboutUsCenter}
            onPress={() => {
              navigation.navigate(SCREENS.DASHBOARD_SCREEN);
            }}
          />
          <Text style={styles.navIconText}>About Us</Text>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 30,
                    color: "#856404",
                  }}
                >
                  Sign Out!
                </Text>
                <Text style={styles.modalText}>
                  Are you sure want to Sign out?
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <TouchableHighlight
                    style={[
                      BTN_STYLE.ACCENT_WARNING_BUTTON,
                      { width: 80, height: 40, marginRight: 10 },
                    ]}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>No</Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                    style={[
                      BTN_STYLE.ACCENT_WARNING_BUTTON,
                      { width: 80, height: 40 },
                    ]}
                    onPress={() => {
                      setModalVisible(false);
                      navigation.navigate(SCREENS.START_SCREEN);
                    }}
                  >
                    <Text style={styles.textStyle}>Yes</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.navBtnWrap}>
          <Icon.Button
            name="power-off"
            color="#fff"
            size={30}
            style={styles.navIconBtn}
            onPress={() => {
              setModalVisible(true);
            }}
          />
          <Text style={styles.navIconText}>Sign Out</Text>
        </View>
      </View>
    </View>
  );
}
