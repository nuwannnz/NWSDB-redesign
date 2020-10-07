import { useNavigation } from "@react-navigation/native";
import React, { useState }  from "react";
import {  Text, View, StyleSheet, Alert, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import {Picker } from '@react-native-community/picker';
import CheckBox from '@react-native-community/checkbox';
import { Button } from 'react-native-elements';

export default function EbillServiceScreen() {


    const [data, setdata] = React.useState();
    const [email, onChangeEmail] = React.useState('');
    const [mobile, onChangeMobile] = React.useState('');
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

    const styles = StyleSheet.create({
        mainText: {
            fontWeight: "bold",
            fontSize: 25,
            textAlign: "center",
            marginTop: 30
        },
        description: {
            marginTop:20,
            fontWeight: "bold",
            fontSize: 17,
            textAlign: "center"
        },
        centeredView: {
            flex: 1,
            alignItems: "center"
        },
        label: {
            padding: 15,
            paddingLeft: 0,
            fontSize: 18,
            textAlign: "left",      
            color: "black",
            marginLeft: 30
        },
        label2: {
            paddingTop: 15,
            paddingLeft: 0,
            fontSize: 15,     
            color: "black"
        },
        inputform: {
            marginTop: 240
        }
    })

    return(
        <View>
        <View style={styles.centeredView}>
            <Text style={styles.mainText}>E-Bill Service</Text>
            <Text style={styles.description}>
                Please register your account Number, Email and Mobile Number below to subscribe to E-Bill Service
            </Text>
            <Text style={styles.label2}>Please select your Account</Text>
            <View style={{height: 60, width: 250, borderColor: '#1976D2', backgroundColor: 'beige', borderWidth: 1,marginTop: 20}}>
            <Picker
            selectedValue={data}
            style={{height: 60, width: 250}}>
            

            <Picker.Item label="Home - Athurugiriya" value="Home - Athurugiriya" />
            <Picker.Item label="Home - Colombo" value="Home - Colombo" />
            <Picker.Item label="Shop - Nugegoda" value="Shop - Nugegoda" />
            </Picker>
            </View>
        </View>

        
        <View style={styles.inputform}>
        <View>
            <Text style={styles.label}><Icon name='email' />Email</Text>
            <TextInput
              style={{ width:250, height: 40, borderColor: '#1976D2', borderWidth: 1, marginTop: 10, marginLeft: 30 }}
              onChangeText={text => onChangeEmail(text)}
              value={email}
            />
            </View>

            <View>
            <Text style={styles.label}><Icon name='phone-iphone' />Mobile Number</Text>
            <TextInput
              style={{ width:250, height: 40, borderColor: "#1976D2", borderWidth: 1, marginTop: 10, marginLeft: 30  }}
              onChangeText={text => onChangeMobile(text)}
              value={mobile}
              keyboardType={'numeric'}
            />
            </View>

            
            <Text
                style={{  fontSize: 16, margin: 30  }}>
                <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />I agree to receive my bill from Email and avoid paper copy
            </Text>
            <View style={{  marginLeft: 50, marginRight: 50  }}>
            <Button
              icon={{
                name: "send",
                size: 15,
                color: "white"
              }}
              title="Register"
              onPress={() => {
                Alert.alert("Registered to E-Bill Service Successfully");
              }}
            />
            </View>
            
        </View>
        </View>
    )

}
 