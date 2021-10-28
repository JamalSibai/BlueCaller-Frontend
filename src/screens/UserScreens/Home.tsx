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
import { colors } from "../../constants/palette";

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
    if (user.freelancerSearch.latitude == "") {
      return alert("Choose Appointment Location");
    }
    if (date == "") {
      return alert("Enter Date");
    }
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
      <View
        style={{
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          padding: 10,
        }}
      >
        <Text> Freelancer One Button Away !! </Text>
      </View>
      <View style={styles.pickerView}>
        <Text style={{ color: "#585858", fontSize: 15 }}>Region: </Text>
        <View style={{ borderWidth: 1 }}>
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
      </View>

      <View style={styles.pickerView}>
        <Text style={{ color: "#585858", fontSize: 15 }}>category: </Text>
        <View style={{ borderWidth: 1 }}>
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
        </View>
      </View>
      <View style={styles.pickerView}>
        <Text style={{ color: "#585858", fontSize: 15 }}>location: </Text>
        <View style={{ borderWidth: 1 }}>
          <TouchableOpacity onPress={onpress}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={styles.TextInput}>Appointment Location</Text>
              <View style={{ paddingTop: 5 }}>
                <MaterialCommunityIcons
                  name={"menu-right"}
                  size={28}
                  color="grey"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.pickerView}>
        <Text style={{ color: "#585858", fontSize: 15 }}>date: </Text>
        {/* <View style={{ borderWidth: 1 }}> */}
        <DatePicker
          style={styles.datepicker}
          date={date}
          placeholder="Select Date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          CancelBtnText="Cancel"
          onDateChange={(d) => setDate(d)}
          showIcon={false}
          // customStyles={{
          //   dateInput: {
          //     marginLeft: 0,
          //     color: "#000",
          //     fontSize: 16,
          //   },
          //   // ... You can check the source to find the other keys.
          // }}
        />
        {/* </View> */}
      </View>

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
    marginVertical: 20,
    width: 300,
    borderColor: "#666",
    alignItems: "center",
  },
  pickerView: {
    width: 300,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderColor: "#666",
  },
  datepicker: {
    width: 300,

    borderColor: "#666",
  },
  TextInput: {
    backgroundColor: "white",
    color: "black",
    alignSelf: "center",
    width: 260,
    padding: 10,
    height: 50,
    fontSize: 16,
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
    width: 300,
  },
  loginText: {
    color: "white",
  },
  fabookButton: {
    backgroundColor: colors.blue,
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
