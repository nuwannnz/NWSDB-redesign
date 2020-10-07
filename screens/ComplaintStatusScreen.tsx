import React, { Component, useState } from 'react'
import { Button, View, Text, StyleSheet, Modal, Alert, Picker, FlatList, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import StatusByAccountID from '../components/complaintments/StatusByAccountID';
import StatusByComplaintID from '../components/complaintments/StatusByComplaintID';

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


    },
    buttons: {
      textAlignVertical: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      
    }
    });

export default function ComplaintStatusScreen() {
  
    const [byAccountNo, setByAccountNo] = useState(false);
    const [byComplaintID, setByComplaintID] = useState(false)
    const [disableAccountBtn, setdisableAccountBtn] = useState(false);
    const [disableComplaintBtn, setdisableComplaintBtn] = useState(false);

    const handleByAccountNo = () => {
      setdisableComplaintBtn(false);
        setByComplaintID(false);
        setByAccountNo(true);
        setdisableAccountBtn(true)
    }

    const handleByComplaintID = () => {
      setdisableAccountBtn(false)
        setByAccountNo(false);
        setByComplaintID(true);
        setdisableComplaintBtn(true);
        
    }


        return (
           <View style={style.container}>
           <View style={style.buttons}> <Button disabled={disableAccountBtn} title='By Account No' onPress={()=> handleByAccountNo()}></Button> <Button disabled={disableComplaintBtn} title='By Complaint ID' onPress={()=> handleByComplaintID()}></Button></View>

            {byAccountNo ? <StatusByAccountID /> : ''}
            {byComplaintID ? <StatusByComplaintID /> : ''}

           </View>
        )
    
}
