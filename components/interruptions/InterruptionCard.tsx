import React from "react";
import { View, StyleSheet, Text } from "react-native";

const InterruptionCardStyles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "flex-start",
    margin: 10,
  },
  dateWrapper: {
    padding: 5,
    backgroundColor: "#ccc",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    elevation: 3,
  },
  infoWrapper: {
    padding: 5,
    display: "flex",
    width: "100%",
    backgroundColor: "#ddd",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    elevation: 3,
  },
  dateText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    marginTop: 5,
  },
});

type InterruptionCardPropType = {
  date: string;
  title: string;
  description: string;
};
export default function InterruptionCard({
  date,
  title,
  description,
}: InterruptionCardPropType) {
  return (
    <View style={InterruptionCardStyles.wrapper}>
      <View style={InterruptionCardStyles.dateWrapper}>
        <Text style={InterruptionCardStyles.dateText}>{date}</Text>
      </View>
      <View style={InterruptionCardStyles.infoWrapper}>
        <Text style={InterruptionCardStyles.titleText}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}
