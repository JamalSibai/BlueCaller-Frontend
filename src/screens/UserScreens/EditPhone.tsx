import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function EditPhone({ navigation }) {
  const [phone, setPhone] = useState(null);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignItems: "center", marginTop: 200, borderWidth: 1 }}>
        <Text style={styles.nameTxt}> Change Your Phone Number </Text>
        <TextInput
          style={styles.nameTxt}
          placeholder="Edit Phone Number"
          placeholderTextColor="grey"
          onChangeText={(Phone) => setPhone(Phone)}
        />
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            // onPress={onpress}
          >
            <View style={styles.socialButtonContent}>
              <Text style={styles.loginText}>Edit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
  nameTxt: {
    marginLeft: 35,
    fontWeight: "700",
    color: "#222",
    fontSize: 20,
    width: 300,
    marginTop: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    // borderWidth: 1,
    borderColor: "#666",
    alignItems: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 280,
    marginTop: -50,
    // borderRadius: 30,
  },
  loginText: {
    color: "white",
  },
  fabookButton: {
    backgroundColor: "#000",
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
