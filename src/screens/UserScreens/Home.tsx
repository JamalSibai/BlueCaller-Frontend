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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { store } from "../../redux/store";
import { updateFreelancerSearch } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const [date, setDate] = useState("");
  const [selectedRegions, setSelectedRegions] = useState("Beirut");
  const [selectedCategories, setSelectedCategories] = useState("Electricity");
  const user = useSelector((state) => state?.user);
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
    store.dispatch(
      updateFreelancerSearch({
        freelancerSearch: {
          date: date,
          category: selectedCategories,
          region: selectedRegions,
          latitude: user.freelancerSearch.latitude,
          longitude: user.freelancerSearch.longitude,
        },
      })
    );
    navigation.navigate("Freelancers");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ marginBottom: -10, marginLeft: 8 }}>Region: </Text>
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
      </View>

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
      <TouchableOpacity onPress={onpress}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={styles.TextInput}>Appointment Locations</Text>
          <MaterialCommunityIcons name={"menu-right"} size={28} color="grey" />
        </View>
      </TouchableOpacity>

      <DatePicker
        style={styles.picker}
        date={date}
        placeholder="Select Date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        CancelBtnText="Cancel"
        onDateChange={(d) => setDate(d)}
      />
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.fabookButton]}
          onPress={onpress2}
        >
          <View style={styles.socialButtonContent}>
            <Text style={styles.loginText}>Find Freelancer</Text>
          </View>
        </TouchableOpacity>
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
    // borderRadius: 15,
    // borderColor: "#666",
    color: "black",
    alignSelf: "center",
    // borderWidth: 1,
    width: 260,
    padding: 10,
    height: 50,
    fontSize: 15,
    marginLeft: -10,
    // marginTop: 10,
    // flexDirection: "row",
  },
  labelText: {
    marginLeft: 0,
    // fontStyle: "bold",
    marginTop: 10,
    marginBottom: 2,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 280,
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
