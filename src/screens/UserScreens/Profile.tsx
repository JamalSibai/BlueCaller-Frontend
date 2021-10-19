import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { store } from "../../redux/store";
import { deleteUser } from "../../redux/slices/userSlice";

export default function Profile({ navigation }) {
  const onpress = () => {
    navigation.navigate("Edit Image");
  };
  const onpress2 = () => {
    navigation.navigate("Edit Name");
  };
  const onpress3 = () => {
    navigation.navigate("Edit Phone Number");
  };
  const onpress4 = () => {
    navigation.navigate("Change Password");
  };

  const Logout = () => {
    store.dispatch(deleteUser());
  };

  return (
    <View>
      <TouchableOpacity onPress={onpress}>
        <Text> Edit Image </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onpress2}>
        <Text> Edit Name </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onpress3}>
        <Text> Edit Phone Number </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onpress4}>
        <Text> Edit Password </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={Logout}>
        <Text> Logout </Text>
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
