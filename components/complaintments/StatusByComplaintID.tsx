import React, { Component, useEffect, useState } from 'react'
import { FlatList, Picker, View, StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

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

export default function StatusByComplaintID() {


      const [complaints, setComplaints] = useState<any>([
        {name: "Hasintha Kavindu", issueType: "Technical issue", complaint: "Very slow responding", accountNo: "14564321789", complaintId: "156416"},
        {name: "Nuwan Karunarathna", issueType: "Billing issue", complaint: "Bill balance is very high", accountNo: "78889891", complaintId: "4556952"}
    ]);

      const [complaintId, setselectedcomplaintId] = useState('')
      const [filterComplaints, setfilterComplaints] = useState([])
      const [selectedComplaint, setselectedComplaint] = useState(null);

      useEffect(() => {
        setselectedComplaint(complaints.find((c: { complaintId: null; }) => c.complaintId === complaintId))
        console.log(selectedComplaint);
      }, [complaintId])

    
        return (
            <View>
            <Text>Complaint ID :</Text>
           <TextInput  
           style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
           placeholder="Enter Complaint ID"  
           onChangeText={text => setselectedcomplaintId(text)}
                  value={complaintId} />

             <FlatList
             extraData={selectedComplaint}
             data={selectedComplaint}
             renderItem={({ item }) => (
                 <View style={style.item}>
                     <Text> {item.name}</Text> 
                     <Text> {item.issueType}</Text> 
                     <Text> {item.complaint}</Text> 
                 </View>
             
             )}
             />
        </View>
        )
    
}
