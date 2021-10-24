import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef, Component } from "react";
import DatePicker from "react-native-datepicker";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AddDates({ navigation }) {
  const user = useSelector((state) => state?.user);
  const [adddate, setAddDate] = useState("");

  const onpress = () => {
    // navigation.navigate("Maps");
  };

  const AddDates = async () => {
    if (adddate == "") {
      return alert("Enter a Date");
    }
    console.log("in adddates");
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/add-calendar`,
        {
          date: adddate,
        },
        {
          headers: {
            Authorization: "bearer " + user.userProfile.token,
            Accept: "application / json",
          },
        }
      );
      if (res.data.hasOwnProperty("status")) {
        console.log(res.data);
        // setData(null);
        alert(adddate + " added to Schedule");
      } else {
        alert(adddate + " added to Schedule");
        // reload();
        console.log(res.data);
      }
    } catch (err) {
      alert(adddate + " already in your schedule!");
      console.log(err);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignItems: "center", marginTop: 200, borderWidth: 1 }}>
        <Text style={styles.nameTxt}> Add To Your Calendar </Text>
        <DatePicker
          style={styles.picker}
          date={adddate}
          placeholder="Select Date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          CancelBtnText="Cancel"
          onDateChange={(d) => setAddDate(d)}
        />
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            onPress={AddDates}
          >
            <View style={styles.socialButtonContent}>
              <Text style={styles.loginText}>Add To Schedule</Text>
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
