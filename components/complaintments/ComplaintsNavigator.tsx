import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserComplaintScreen from '../../screens/UserComplaintScreen';
import LoginScreen from '../../screens/LoginScreen';
import PublicComplaintScreen from '../../screens/PublicComplaintScreen';
import ComplaintStatusScreen from '../../screens/ComplaintStatusScreen';
import { MaterialIcons } from '@expo/vector-icons';

export default function ComplaintsNavigator()  {

    const Tab = createBottomTabNavigator();
 
        return (
            <Tab.Navigator  >
            <Tab.Screen name="User Complaint" options={{
                tabBarIcon: () => (
                    <MaterialIcons name="info" color="#1976D2" size={26} />
                ) 
            }} component={UserComplaintScreen} />
            <Tab.Screen name="Public Complaint"  options={{
                tabBarIcon: () => (
                    <MaterialIcons name="opacity" color="#1976D2" size={26} />
                ) 
            }} component={PublicComplaintScreen} />
            <Tab.Screen name="Complaint Status" options={{
                tabBarIcon: () => (
                    <MaterialIcons name="info" color="#1976D2" size={26} />
                ) 
            }} component={ComplaintStatusScreen} />
            </Tab.Navigator>
        )
    
}
