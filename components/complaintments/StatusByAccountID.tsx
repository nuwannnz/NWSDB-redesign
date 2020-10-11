import React, { Component, useEffect, useState } from 'react'
import { FlatList, Picker, View, StyleSheet, Text } from 'react-native'

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

    export type ComplaintType = {
        name: string;
        issueType: string;
        complaint: string;
        accountNo: string;
        complaintId: string;
      
      };

    const complaints = [
      {name: "Hasintha Kavindu", issueType: "Technical issue", complaint: "Very slow responding", accountNo: 1, complaintId: "456445643213"},
        {name: "Nuwan Karunarathna", issueType: "Billing issue", complaint: "Bill balance is very high", accountNo: 1, complaintId: "8894564898"}
    
    ]

export default function StatusByAccountID() {

    const [accounts, setAccounts] = useState([
        {index: 1, name: 'Home', number: '45643213', personName: 'Hasintha Kavindu', address: 'No.482/16, Makumbura south, kottawa'},
        {index: 2, name: 'Office', number: '4564898', personName: 'Nuwan Karunarathna', address: 'No.21, Borella'},
    
        {index: 3, name: 'Home 2', number: '78941335', personName: 'Nirmal', address: 'No.31, Pannipitiya'}
    
      ])

    //   const [complaints, setComplaints] = useState<any>([
    //     {name: "Hasintha Kavindu", issueType: "Technical issue", complaint: "Very slow responding", accountNo: 1, complaintId: "456445643213"},
    //     {name: "Nuwan Karunarathna", issueType: "Billing issue", complaint: "Bill balance is very high", accountNo: 1, complaintId: "8894564898"}
    // ]);

      const [selectedAccount, setselectedAccount] = useState(null);
      const [filterComplaints, setfilterComplaints] = useState<any>(null);

      const dropDownUse = (acountNo: string) => {
        const acc = complaints.find(a => a.accountNo === parseInt(acountNo));
        setfilterComplaints({...acc});
      
        console.log(acc);
      };

      useEffect(() => {
          
        
            console.log(filterComplaints)
      }, [filterComplaints])
    
        return (
           <View>
             <Text>Account No :</Text>
               <Picker   style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onValueChange={(index, i) => dropDownUse(index)} selectedValue={selectedAccount}>
               <Picker.Item label="- select account -" value={-1} />
               {accounts.map(item => (
                   <Picker.Item key={item.index} label={item.name} value={item.index} />
               ))}
                 
                </Picker> 
                
                {filterComplaints ? 
                <FlatList
                data={filterComplaints}
                extraData={filterComplaints}
                renderItem={({ item }) => (
                    <View style={style.item}>
                        <Text> {item.name}</Text> 
                        <Text> {item.issueType}</Text> 
                        <Text> {item.complaint}</Text> 
                    </View>
                
                )}
                /> : ''}
              
           </View>
        )
    
}
