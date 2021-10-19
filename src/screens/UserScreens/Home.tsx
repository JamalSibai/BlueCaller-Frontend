import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect, useRef, Component } from "react";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";

export default function Home({ navigation }) {
  const [date, setDate] = useState("");
  const [selectedRegions, setSelectedRegions] = useState("Beirut");
  const [selectedCategories, setSelectedCategories] = useState("Electricity");
  const [regions] = useState(
    [
      "Akkar",
      "Baalbeck-Hermel",
      "Beirut",
      "Bekaa",
      "Mount Lebanon",
      "North Lebanon",
      "Nabatiyeh",
      "South Lebanon",
    ].sort()
  );
  const [categories] = useState(
    [
      "Electricity",
      "Air Conditioning",
      "Satellite",
      "Pluming",
      "Carpentry",
      "Welding",
      "General Constraction",
      "Car Mechanic",
      "Car Electricity",
      "Tires Expert",
      "Glass and Aluminum",
      "Elevator Maintenance",
    ].sort()
  );

  const onpress = () => {
    navigation.navigate("Maps");
  };
  const onpress2 = () => {
    navigation.navigate("Freelancers");
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedRegions}
        onValueChange={(value, index) => setSelectedRegions(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        {regions.map((r) => (
          <Picker.Item label={r} value={r} key={r} />
        ))}
      </Picker>

      <Picker
        selectedValue={selectedCategories}
        onValueChange={(value, index) => setSelectedCategories(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        {categories.map((c) => (
          <Picker.Item label={c} value={c} key={c} />
        ))}
      </Picker>

      {/* <DatePicker
        style={styles.picker}
        date={date}
        placeholder="Select Date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        CancelBtnText="Cancel"
        onDateChange={(d) => setDate(d)}
      /> */}

      <View>
        <Text style={styles.labelText}> Maps </Text>
        <Text style={styles.TextInput}> Locaiont </Text>
      </View>

      <View style={styles.picker}>
        <TextInput
          style={styles.TextInput}
          placeholder="Description"
          placeholderTextColor="#FE5267"
          // onChangeText={(dob) => setDOB(dob)}
        />
      </View>

      <TouchableOpacity onPress={onpress}>
        <Text> Home </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onpress2}>
        <Text> Done </Text>
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
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    // borderWidth: 1,
    borderColor: "#666",
    alignItems: "center",
  },
  TextInput: {
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "#666",
    color: "black",
    alignSelf: "center",
    borderWidth: 1,
    width: 300,
    padding: 10,
    height: 50,
  },
  labelText: {
    marginLeft: 0,
    // fontStyle: "bold",
    marginTop: 10,
    marginBottom: 2,
  },
});
