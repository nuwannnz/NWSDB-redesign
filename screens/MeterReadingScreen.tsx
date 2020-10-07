import React, { Component, useEffect, useState } from "react";
import {
  Picker,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
  modalText: {
    marginBottom: 15,
  },
  statusBox: {
    padding: 30,
    backgroundColor: "#2FD800",
    borderColor: "black",
    borderRadius: 5,
  },
});

export default function MeterReadingScreen() {
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

  const [selectedAccount, setselectedAccount] = useState<any>({
    name: "",
    number: "",
    personName: "",
    address: "",
  });
  const [displayInputs, setdisplayInputs] = useState(false);
  const [dropdown, setdropdown] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const dropDownUse = (acountNo: any) => {
    setselectedAccount(acountNo);
    setdropdown(true);
    console.log(selectedAccount);
  };

  useEffect(() => {
    if (dropdown) {
      setdisplayInputs(true);
    }
  }, [dropDownUse]);

  const submit = () => {};

  return (
    <View style={style.container}>
      <Text>Select an account :</Text>
      <Picker
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onValueChange={(text: any) => dropDownUse(text)}
        selectedValue={selectedAccount}
      >
        <Picker.Item label="- select account -" value={null} />
        {accounts.map((item: { name: any }) => (
          <Picker.Item label={item.name} value={item} />
        ))}
      </Picker>

      {displayInputs ? (
        <View>
          <View style={style.statusBox}>
            <Text style={style.modalText}>
              Account No : {selectedAccount.number}
            </Text>
            <Text style={style.modalText}>
              Personal Name : {selectedAccount.personName}
            </Text>
            <Text style={style.modalText}>
              Address : {selectedAccount.address}
            </Text>
          </View>
          <Text style={style.modalText}>Complaint category : </Text>
          <Picker style={{ height: 40, borderColor: "gray", borderWidth: 1 }}>
            <Picker.Item label="- select category -" value="0" />
            <Picker.Item label="Billing issue" value="Billing issue" />
            <Picker.Item label="Technical issue" value="Technical issue" />
            <Picker.Item label="App issue" value="App issue" />
          </Picker>
          <Text style={style.modalText}>Meter Reading : </Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            placeholder="Enter Meter Reading"
          />
          <Text style={style.modalText}>Select Date : </Text>
          <Button title="Pick a date" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          {"\n"}
          <Button
            title="Submit"
            color="green"
            onPress={() => submit()}
          ></Button>
        </View>
      ) : null}
    </View>
  );
}
