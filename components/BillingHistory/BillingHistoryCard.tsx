import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BillingCardStyles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "flex-start",
    margin: 10,
  },
  dateWrapper: {
    padding: 5,
    backgroundColor: "#86b1db",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    elevation: 3,
  },
  infoWrapper: {
    padding: 8,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d8ecff",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    elevation: 3,
  },
  dateText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    marginTop: 5,
  },
});

type BillingMonthType = {
  month: string;
  monthCharge: number;
  payment: number;
  totalDue: number;
};
export default function BillingHistoryCard({
  month,
  monthCharge,
  payment,
  totalDue,
}: BillingMonthType) {
  return (
    <View style={BillingCardStyles.wrapper}>
      <View style={BillingCardStyles.dateWrapper}>
        <Text style={BillingCardStyles.dateText}>{month}</Text>
      </View>
      <View style={BillingCardStyles.infoWrapper}>
        <View style={{ flex: 1 }}>
          <Text style={{}}>
            Month charge:
            <Text style={{ fontWeight: "bold", marginRight: 5, fontSize: 17 }}>
              {" "}
              {monthCharge}
            </Text>
          </Text>
          <Text style={{ marginTop: 10 }}>
            Payment:
            <Text style={{ fontWeight: "bold", marginRight: 5, fontSize: 17 }}>
              {" "}
              {payment}
            </Text>
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: 10,
          }}
        >
          <View style={{ display: "flex", alignItems: "flex-end" }}>
            <Text>Total Due</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {" "}
              Rs. {totalDue}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
