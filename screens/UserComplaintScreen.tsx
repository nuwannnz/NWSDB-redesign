import React, { Component, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  View,
  Text,
  StyleSheet,
  Modal,
  Alert,
  Picker,
} from "react-native";
import { SCREENS } from "../constants/screens";
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from "react-native-gesture-handler";
import addModal from "../components/complaintments/addModal";
import { MaterialIcons } from "@expo/vector-icons";

export default function UserComplaintScreen() {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const [accounts, setAccounts] = useState([
    {
      name: "Home",
      number: "45643213",
      personName: "Hasintha Kavindu",
      address: "No.482/16, Makumbura south, kottawa",
    },
    {
      name: "Office",
      number: "4564898",
      personName: "Nuwan Karunarathna",
      address: "No.21, Borella",
    },

    {
      name: "Home 2",
      number: "78941335",
      personName: "Nirmal",
      address: "No.31, Pannipitiya",
    },
  ]);

  const style = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: "white",
      fontSize: 20,
    },
    statusBox: {
      padding: 30,
      backgroundColor: "#75BAFF",
      borderColor: "black",
      borderRadius: 5,
    },
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState({
    account: "",
    personName: "",
    address: "",
  });

  const clickAccount = (
    account: string,
    personName: string,
    address: string
  ) => {
    setSelectedAccount({
      account: account,
      personName: personName,
      address: address,
    });
    setModalOpen(true);
  };

  const MultilineTextInput = (props: any) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
    );
  };
  return (
    <View style={style.container}>
      <Text> Select an account : </Text>

      <FlatList
        data={accounts}
        renderItem={({ item }) => (
          <Button
            title={item.name + " - " + item.number}
            onPress={() =>
              clickAccount(item.number, item.personName, item.address)
            }
          />
        
        )}
      />

      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.centeredView}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
          />
          <View style={styles.modalView}>
            <View style={style.statusBox}>
              <Text style={styles.modalText}>
                Account No : {selectedAccount.account}
              </Text>
              <Text style={styles.modalText}>
                Persona Name : {selectedAccount.personName}
              </Text>
              <Text style={styles.modalText}>
                Address : {selectedAccount.address}
              </Text>
            </View>
            <Text style={styles.modalText}>Complaint category : </Text>
            <Picker style={{ height: 40, borderColor: "gray", borderWidth: 1 }}>
              <Picker.Item label="- select category -" value="0" />
              <Picker.Item label="Billing issue" value="Billing issue" />
              <Picker.Item label="Technical issue" value="Technical issue" />
              <Picker.Item label="App issue" value="App issue" />
            </Picker>
            <Text style={styles.modalText}>Mobile Number : </Text>
            <TextInput
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              placeholder="Enter Mobile Number"
            />

            <Text style={styles.modalText}>Your Complaint : </Text>

            <View
              style={{
                borderBottomColor: "#000000",
                borderBottomWidth: 1,
              }}
            >
              <MultilineTextInput multiline numberOfLines={4} />
            </View>
            <Text></Text>
            <Button
              title="Submit"
              color="green"
              onPress={() => setModalOpen(false)}
            ></Button>
          </View>
        </View>
      </Modal>

     
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,

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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
  },
});
