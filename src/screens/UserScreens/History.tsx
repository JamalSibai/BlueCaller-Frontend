import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function History({ navigation }) {
  return (
    <View>
      <Text> History </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
