import React, { Component, useState } from 'react'
import { Button, View, Text, StyleSheet, Modal, Alert, Picker, FlatList, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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

export default function PublicComplaintScreen()  {

        const [modalOpen, setModalOpen] = useState(false);
        const [mobileNo, setMobileNo] = useState('');
        const [complaintType, setcomplaintType] = useState('');
        const [complaint, setcomplaint] = useState('');
        const [complaints, setComplaints] = useState([
          {name: "Hasintha Kavindu", issueType: "Technical issue", complaint: "Very slow responding", accountNo: "14564321789", complaintId: "156416"},
          {name: "Nuwan Karunarathna", issueType: "Billing issue", complaint: "Bill balance is very high", accountNo: "78889891", complaintId: "4556952"}
      ]);
        
        const MultilineTextInput = (props: any) => {
            return (
              <TextInput
                {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable
                maxLength={40}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              />
            );
          }

        const addComplaints = () => {
               
            setComplaints([...complaints, {name: "User", issueType: complaintType, complaint: complaint, accountNo: "", complaintId: ""}])
            setModalOpen(false);
        }
 
        return (
            <View style={style.container} >



             

                <FlatList
                data={complaints}
                renderItem={({ item }) => (
                    <View style={style.item}>
                        <Text  style={{fontWeight: "bold"}}> {item.name}</Text> 
                        <Text> - {item.issueType} - </Text> 
                        <Text style={{fontStyle: "italic"}}> {item.complaint}</Text> 
                    </View>
                
                )}
                />

                <Button title="ADD A COMPLAINT" onPress={() => setModalOpen(true)}></Button>

                <Modal visible={modalOpen} animationType='slide'>
            <View style={styles.centeredView}>
            
          <View style={styles.modalView}>
            
              <Text style={styles.modalText}>Complaint category  : </Text>
               <Picker style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onValueChange={text => setcomplaintType(text)} selectedValue={complaintType}>
               <Picker.Item label="- select category -" value="0" />
                 <Picker.Item label="Billing issue" value="Billing issue" />
                 <Picker.Item label="Technical issue" value="Technical issue" />
                 <Picker.Item label="App issue" value="App issue" />
                </Picker> 
                <Text style={styles.modalText}>Mobile Number  : </Text>   
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={text => setMobileNo(text)}
                  value={mobileNo}
                  placeholder="Enter Mobile Number"
                />   

                    <Text style={styles.modalText}>Your Complaint  : </Text>      

                <View
                      style={{
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                      }}>
                      <MultilineTextInput
                        multiline
                        numberOfLines={4}
                        onChangeText={text => setcomplaint(text)}
                        value={complaint}
                   
                      />
                    </View>

                    <Button title="Submit" color="green" onPress={() => addComplaints()}></Button>
           
          </View>
        </View>
            
           

            </Modal>
            </View>
        )
    
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,

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
    
    },
    modalText: {
      marginBottom: 15,
     
    }
  });
