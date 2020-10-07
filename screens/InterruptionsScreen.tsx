import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import InterruptionCard from "../components/interruptions/InterruptionCard";
import { SCREENS } from "../constants/screens";

type InterruptionType = {
  date: string;
  title: string;
  description: string;
};

const interruptions: InterruptionType[] = [
  {
    date: "30th October 2020",
    title: "Tank pump line repair",
    description: "Kapuwaththa, Mirisiwatta road",
  },
  {
    date: "01st November 2020",
    title: "Main line repair",
    description: "Athurugiriya rd, Malabe",
  },
  {
    date: "13th November 2020",
    title: "Line replacement",
    description: "Rajagiriya rd, Borella",
  },
];

export default function InterruptionsScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 10 }}>
      {interruptions.map((i, r) => (
        <InterruptionCard
          key={r}
          date={i.date}
          description={i.description}
          title={i.title}
        />
      ))}
    </View>
  );
}
