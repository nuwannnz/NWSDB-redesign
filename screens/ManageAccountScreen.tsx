import { useNavigation } from "@react-navigation/native";
import { IconButton, Colors } from 'react-native-paper';
import React, { useState }  from "react";
import { Text, View, StyleSheet, Modal, Alert,TouchableHighlight, TextInput } from "react-native";
import { Button } from 'react-native-elements';
import AccountDetails from '../components/ManageAccounts/AccountDetails'
import { Icon } from "react-native-elements";




export default function ManageAccountScreen() {
 
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [acnumber, onChangeTextnumber] = React.useState('');
  const [acname, onChangeTextname] = React.useState('');

 
  const styles = StyleSheet.create({

    mainText: {
      fontWeight: "bold",
      fontSize: 25,
      textAlign: "center",
      marginTop: 30
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalTitle: {
      fontWeight: "bold",
      fontSize: 25,
      textAlign: "center"
    },
    button_edit: {
      marginRight: 40,
      width: 80,
      alignSelf: "flex-end"
    },
    label: {
      padding: 15,
      paddingLeft: 0,
      fontSize: 18,
      textAlign: "left",      
      color: "black"
    },
    label2: {
      paddingBottom: 5,
      paddingLeft: 0,
      fontSize: 13,
      textAlign: "left",      
      color: "black"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color: "white",
      fontSize: 20,
    },
    modalTitleBackground: {
      width: 250,
      padding: 15,
      backgroundColor: "#1976D2"
    },
    container_row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    Button: {
      margin: 15, 
      marginTop: 35
    },
    
  });

  return (


  
    <View>
      <Text style={styles.mainText}>Manage Accounts</Text>

      <AccountDetails acname="Home-Colombo" acnumber="10/122/226/12"/>
      <AccountDetails acname="Home-Athurugiriya" acnumber="10/122/226/12"/>

      <View style={styles.button_edit}>
        <IconButton
          icon="plus-circle"
          color={Colors.blue600}
          size={60}
          onPress={() =>  {
          {setModalVisible(!modalVisible)}
        }}
      
        />
        <View style={styles.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalTitleBackground}>
            <Text style={styles.modalText}>Add New Account</Text>
            </View>
            
            <View>
            <Text style={styles.label}><Icon name='portrait' />Account Name</Text>
            <Text style={styles.label2}>(Ex: Home, Shop)</Text>
            <TextInput
              style={{ width:250, height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
              onChangeText={text => onChangeTextname(text)}
              value={acname}
            />
            </View>

            <View>
            <Text style={styles.label}><Icon name='confirmation-number' />Account Number</Text>
            <Text style={styles.label2}>(Ex: xx/xx/xxx/xxx/xx)</Text>
            <TextInput
              style={{ width:250, height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
              onChangeText={text => onChangeTextnumber(text)}
              value={acnumber}
              keyboardType={'numeric'}
            />
            </View>

            <View style={styles.container_row}>
            <View style={styles.Button}>
            <Button
              icon={{
                name: "add-to-photos",
                size: 15,
                color: "white"
              }}
              title="Add new Account"
              onPress={() => {
                {setModalVisible(!modalVisible)};
                Alert.alert("New Account added Successfully");
              }}
            />
            </View>

              <View style={styles.Button}>
              <Button 
              icon={{
                name: "close",
                size: 15,
                color: "#1976D2"
              }}
              title="Cancel"
              type="outline"
              onPress={() => {
                {setModalVisible(!modalVisible)};
              }}
              /></View>
              </View>
          </View>
        </View>
      </Modal>
      </View>
      </View>
    </View>
  );
}
