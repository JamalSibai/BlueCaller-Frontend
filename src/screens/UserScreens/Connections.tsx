import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Chat from "./Chat";

export default function Connections({ navigation }) {
  const onpress = () => {
    navigation.navigate("Chat");
  };

  return (
    <View>
      <TouchableOpacity onPress={onpress}>
        <Text> Chat </Text>
      </TouchableOpacity>
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
