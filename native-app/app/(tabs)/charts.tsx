import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import MachineHealthCharts from "../../pages/MachineHealth";
import { View } from "../../components/Themed";

export default function TabChartsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.separator} />
        <MachineHealthCharts />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
});
