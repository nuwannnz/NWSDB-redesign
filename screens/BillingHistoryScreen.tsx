import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Picker,
  Modal,
  Alert,
  TouchableOpacity,
} from "react-native";
import BillingHistoryCard from "../components/BillingHistory/BillingHistoryCard";
import { SCREENS } from "../constants/screens";
import { BTN_STYLE, COLORS } from "../constants/styles";

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  pickerWrapper: {
    backgroundColor: "#ddd",
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 4,
  },
  tabWrapper: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#aaa",
    minHeight: 50,
    width: "100%",
    justifyContent: "space-evenly",
  },
  tabButton: {
    flex: 1,
    minWidth: "50%",
    borderRadius: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  billModalWrap: {
    width: "100%",
    height: "100%",
    backgroundColor: "#00000077",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  billModal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
    marginTop: 20,
    height: "70%",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
  },
  billModalTitle: {
    backgroundColor: COLORS.accentColor,
    padding: 15,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
  },
  tableCell: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    minHeight: 30,
    width: "50%",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: "#000",
    borderLeftColor: "#000",
    borderTopColor: "#000",
    borderRightColor: "#000",
  },
  tableDataCell: {
    padding: 10,
  },
});

const accounts = [
  {
    index: 1,
    label: "10/38/200/104 - Home",
    bills: [
      {
        month: "July 2020",
        monthCharge: 2300,
        payment: 500,
        totalDue: 1800,
        lastPaymentOn: "24th July 2020",
      },

      {
        month: "June 2020",
        monthCharge: 300,
        payment: 200,
        totalDue: 100,
        lastPaymentOn: "12th June 2020",
      },
    ],
  },
  {
    index: 2,
    label: "13/32/123/423 - Office",
    bills: [
      {
        month: "July 2020",
        monthCharge: 3000,
        payment: 0,
        totalDue: 3300,
        lastPaymentOn: "15th July 2020",
      },

      {
        month: "June 2020",
        monthCharge: 500,
        payment: 200,
        totalDue: 300,
        lastPaymentOn: "22nd June 2020",
      },
    ],
  },
];

export default function BillingHistoryScreen() {
  const navigation = useNavigation();
  const [selectedAccountIndex, setSelectedAccountIndex] = useState(-1);
  const [selectedTabIndex, setSelectedTabIndex] = useState(1);
  const [selectedBillMonth, setSelectedBillMonth] = useState<any>(null);
  const [displayBillModal, setDisplayBillModal] = useState(false);

  const handleAccountSelected = (accountIndex: number) => {
    setSelectedAccountIndex(accountIndex);
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20 }}>Select an account</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedAccountIndex}
              onValueChange={(val, i) => handleAccountSelected(val)}
            >
              <Picker.Item label="Select an account" value={-1} />
              {accounts.map((a) => (
                <Picker.Item key={a.index} label={a.label} value={a.index} />
              ))}
            </Picker>
          </View>
        </View>

        <View>
          {selectedAccountIndex !== -1 &&
            selectedTabIndex === 1 &&
            accounts
              .find((a) => a.index === selectedAccountIndex)
              ?.bills.map((b, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    setDisplayBillModal(true);
                    setSelectedBillMonth(b);
                  }}
                >
                  <BillingHistoryCard {...b} />
                </TouchableOpacity>
              ))}

          {selectedAccountIndex !== -1 && selectedTabIndex === 2 && (
            <View>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Text>Total amount payable</Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 30, marginBottom: 25 }}
                >
                  Rs. 450
                </Text>

                <Text>Last payment</Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 23, marginBottom: 5 }}
                >
                  Rs.{" "}
                  {
                    accounts.find((a) => selectedAccountIndex === a.index)
                      ?.bills[0].payment
                  }
                </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, marginBottom: 25 }}
                >
                  {
                    accounts.find((a) => selectedAccountIndex === a.index)
                      ?.bills[0].lastPaymentOn
                  }
                </Text>
              </View>

              <View style={{ marginTop: 10, padding: 10 }}>
                <Text style={{ fontSize: 20 }}>Payments</Text>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <View style={styles.tableCell}>
                    <Text>Month (2020)</Text>
                  </View>

                  <View style={styles.tableCell}>
                    <Text>Amount (Rs)</Text>
                  </View>
                </View>

                <View style={{ display: "flex", flexDirection: "row" }}>
                  <View style={[styles.tableCell, styles.tableDataCell]}>
                    <Text style={{ marginBottom: 10 }}>July</Text>
                    <Text style={{ marginBottom: 10 }}>June</Text>
                  </View>

                  <View style={[styles.tableCell, styles.tableDataCell]}>
                    <Text style={{ marginBottom: 10 }}>2300</Text>
                    <Text style={{ marginBottom: 10 }}>200</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>

      {/* Modal */}
      <Modal visible={displayBillModal} transparent animationType="slide">
        <View style={styles.billModalWrap}>
          {selectedBillMonth && (
            <View style={styles.billModal}>
              <View style={styles.billModalTitle}>
                <Text style={{ color: COLORS.textOnAccentColor, fontSize: 20 }}>
                  {selectedBillMonth.month}
                </Text>
              </View>

              <View style={{ display: "flex", alignItems: "center" }}>
                <Text>Monthly charge</Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 23, marginBottom: 25 }}
                >
                  Rs. {selectedBillMonth.monthCharge}(-)
                </Text>

                <Text>Total payments</Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 23, marginBottom: 25 }}
                >
                  Rs. {selectedBillMonth.payment}(+)
                </Text>

                <Text>Last payment on</Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, marginBottom: 50 }}
                >
                  {selectedBillMonth.lastPaymentOn}
                </Text>

                <Text>Total Due</Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 30, marginBottom: 0 }}
                >
                  Rs. {selectedBillMonth.totalDue} (-)
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "#ddd",
                  minHeight: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomLeftRadius: 10,
                  borderBottomEndRadius: 10,
                }}
                onPress={() => {
                  setDisplayBillModal(false);
                }}
              >
                <Text style={{ color: "#000", fontSize: 18 }}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>

      {/* Bottom tabs */}
      <View style={styles.tabWrapper}>
        <TouchableOpacity
          style={{
            ...styles.tabButton,
            backgroundColor:
              selectedTabIndex === 1 ? COLORS.accentColor : "#50a4f5",
          }}
          onPress={() => {
            setSelectedTabIndex(1);
            navigation.setOptions({ title: "Billing history" });
          }}
        >
          <Text style={{ color: COLORS.textOnAccentColor, fontSize: 18 }}>
            Bill history
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.tabButton,
            backgroundColor:
              selectedTabIndex === 2 ? COLORS.accentColor : "#50a4f5",
          }}
          onPress={() => {
            setSelectedTabIndex(2);
            navigation.setOptions({ title: "Payment history" });
          }}
        >
          <Text style={{ color: COLORS.textOnAccentColor, fontSize: 18 }}>
            Payment history
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
