import React, { Component, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

import { Dimensions, Platform, Text, Modal, Button } from 'react-native';

var screen = Dimensions.get('window');


export default class addModal extends Component {

    constructor(props: Readonly<{}>) {
        super(props);
    }
    
    render() {
        return (
            <Modal
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width = 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    alert("modal closed");
                }}
            >

                <Text> Add User Complain </Text>

            </Modal>
        )
    }
}
