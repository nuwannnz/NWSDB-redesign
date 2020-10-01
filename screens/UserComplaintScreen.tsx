import React, { Component, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { Button, View, Text, StyleSheet, Modal, Alert } from 'react-native';
import { SCREENS } from "../constants/screens";
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

export default function UserComplaintScreen() {

  const navigation = useNavigation();
  const [accounts, setAccounts] = useState([
    {name: 'Home', number: '45643213'},
    {name: 'Office', number: '4564898'},

    {name: 'Home 2', number: '78941335'}

  ])

  
    const style = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20

      },
      item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'white',
        fontSize: 20,


      }
      });

      const [modalVisible, setModalVisible] = useState(false);
        return (
          
            
           <View style={style.container}
            >
            <Text> User Complaint</Text>

            <Text> Select an account : </Text>
            <ScrollView>
              {
                accounts.map(a => (
                 <Button title={a.name +' - '+ a.number}
                 onPress={() => {
                  navigation.navigate(SCREENS.INTERRUPTIONS_SCREEN);
                }} > </Button>
                  
                ))
              }
            </ScrollView>

        </View>
  

          
        )
    
}
