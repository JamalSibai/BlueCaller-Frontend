import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef, Component } from "react";
import DatePicker from "react-native-datepicker";
import axios from "axios";
import { useSelector } from "react-redux";
import { colors } from "../../constants/palette";
import { updateChangeDate } from "../../redux/slices/userSlice";
import { store } from "../../redux/store";

export default function AddDates({ navigation }) {
  const user = useSelector((state) => state?.user);
  const [adddate, setAddDate] = useState("");

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
        alert(adddate + " added to Schedule");
        store.dispatch(
          updateChangeDate({
            changeDate: {
              change: adddate,
            },
          })
        );
      } else {
        console.log(res.data);
      }
    } catch (err) {
      alert(adddate + " already in your schedule!");
      console.log(err);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <View
        style={{
          alignItems: "center",
          paddingTop: 20,
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View style={{ marginTop: 180 }}>
          <Text style={styles.nameTxt}> Set Your Availability </Text>
          <DatePicker
            style={styles.picker}
            date={adddate}
            placeholder="Select Date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            CancelBtnText="Cancel"
            onDateChange={(d) => setAddDate(d)}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: -127 }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            onPress={AddDates}
          >
            <View style={styles.socialButtonContent}>
              <Text style={styles.loginText}>Add Availability</Text>
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
    color: "#222",
    fontSize: 25,
    width: 300,
    marginTop: 10,
    marginLeft: -5,
    alignItems: "center",
    marginBottom: -10,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    borderColor: "#666",
    alignItems: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 400,
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: "105%",
  },
  loginText: {
    color: "white",
    fontSize: 20,
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
