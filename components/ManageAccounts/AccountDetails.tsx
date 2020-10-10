import React,{ useState }  from "react";
import {  Text, View, StyleSheet,Modal,Alert,TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../constants/screens";
import { COLORS } from "../../constants/styles";
import { Icon } from "react-native-elements";
import { Button } from 'react-native-elements';
import { IconButton, Colors } from 'react-native-paper';

export default function AddAccountModal({acname = "text", acnumber = "text" } ) {
  const navigation = useNavigation();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [acnum, onChangeTextnumber] = React.useState('');
  const [ac_name, onChangeTextname] = React.useState('');

    const styles = StyleSheet.create({

      account_container: {
          backgroundColor: "beige",
          borderWidth: 2,
          borderColor: "#1976D2",
          padding: 15,
          margin: 25
      },
      container_row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      },

      edit_delete_row: {
        marginLeft: 200,
        flexDirection: "row",

      },
  
      container_column: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
    
  
        button_edit: {
          margin: 5,
          alignContent: "flex-end"
        },
      para: {
        width: 200,
        textAlign: "center",
      },
      introText: {
        display: "flex",
        alignItems: "center",
      },
      acname: {
        fontSize: 25,
        paddingBottom: 10
      },
      acno: {
        fontSize: 18, 
        fontWeight: "bold",
        paddingBottom: 10
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
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
      },
      label: {
        padding: 15,
        paddingLeft: 0,
        fontSize: 20,
        textAlign: "left",      
        color: "black"
      },
      deletelabel:{
        padding: 15,
        fontSize: 20,
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
        fontSize: 20
      },
      modalTitleBackground: {
        width: 360,
        padding: 15,
        backgroundColor: "#1976D2"
      },
      Button: {
        margin: 15, 
        marginTop: 35
      },
    });
  return (
    <View style={styles.account_container}>
        <View style={styles.container_column}>
            <Text style={styles.acname}>{acname}</Text>
            <Text style={styles.acno}>{acnumber}</Text>
        </View>
        
        <View style={styles.edit_delete_row}>
        <Button 
              icon={{
                name: "edit",
                size: 25,
                color: "white"
              }}
              onPress={() => {
                {setEditModalVisible(!editModalVisible)};
              }}
        />

        <View style={styles.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalTitleBackground}>
            <Text style={styles.modalText}>Edit Account</Text>
            </View>
            
            <View>
            <Text style={styles.label}><Icon name='portrait' />Account Name</Text>
            <Text style={styles.label2}>(Ex: Home, Shop)</Text>
            <TextInput
              style={{ width:250, height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
              onChangeText={ac_name => onChangeTextname(ac_name)}
              value={acname}
            />
            </View>

            <View>
            <Text style={styles.label}><Icon name='confirmation-number' />Account Number</Text>
            <Text style={styles.label2}>(Ex: xx/xx/xxx/xxx/xx)</Text>
            <TextInput
              style={{ width:250, height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
              onChangeText={acnum => onChangeTextnumber(acnum)}
              value={acnumber}
              keyboardType={'numeric'}
            />
            </View>

            
            <View style={styles.container_row}>
            <View style={styles.Button}>
            <Button
              icon={{
                name: "edit",
                size: 15,
                color: "white"
              }}
              title="Edit Account"
              onPress={() => {
                {setEditModalVisible(!editModalVisible)};
                Alert.alert("Account edited Successfully");
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
                {setEditModalVisible(!editModalVisible)};
              }}
              /></View>
              </View>
          </View>
        </View>
      </Modal>
      </View>
        
      <Button 
              icon={{
                name: "delete",
                size: 25,
                color: "white"
              }}
              onPress={() => {
                {setDeleteModalVisible(!deleteModalVisible)};
              }}
        />

        <View style={styles.centeredView}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalTitleBackground}>
            <Text style={styles.modalText}>Delete Account</Text>
            </View>
          
            <Text style={styles.deletelabel}>Are you sure you want to delete {acname} account?</Text>

            
            <View style={styles.container_row}>
            <View style={styles.Button}>
            <Button
              icon={{
                name: "delete",
                size: 15,
                color: "white"
              }}
              title="Delete"
              onPress={() => {
                {setDeleteModalVisible(!deleteModalVisible)};
                Alert.alert("Account edited Successfully");
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
                {setDeleteModalVisible(!deleteModalVisible)};
              }}
              /></View>
              </View>
          </View>
        </View>
      </Modal>
      </View>
        </View>
        </View>

  )}