import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DateListing({ navigation, props }) {
  return (
    <View>
      <View style={styles.notificationBox}>
        <Text style={styles.description}>Date : 2021-12-24</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    padding: 20,
    margin: 5,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    borderRadius: 10,
  },
  description: {
    fontSize: 18,
    color: "#000",
    marginLeft: 10,
  },
});
