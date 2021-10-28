import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect, useRef, Component } from "react";
import { Picker } from "@react-native-picker/picker";
import EmptyState from "../../components/EmptyState";
import HistoryCard from "../../components/HistoryCard";
import axios from "axios";
import { useSelector } from "react-redux";
import DateListing from "../../components/DateListing";
import { store } from "../../redux/store";
import { updateAppointmentDate } from "../../redux/slices/userSlice";

export default function Calendar({ navigation }) {
  const [data, setData] = useState(null);
  const user = useSelector((state) => state?.user);

  const navigate = (freelancerDate) => {
    console.log("in Connections" + freelancerDate);
    store.dispatch(
      updateAppointmentDate({
        appointmentDate: {
          date: freelancerDate,
        },
      })
    );
    navigation.navigate("Appointments");
  };

  const userDates = async () => {
    try {
      const res = await axios.get(`https://bluecaller.tk/api/auth/get-dates`, {
        headers: {
          Authorization: "bearer " + user.userProfile.token,
          Accept: "application / json",
        },
      });
      if (res.data.hasOwnProperty("status")) {
        console.log(res.data);
      } else {
        setData(res.data);
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userDates();
  }, [user.changeDate.change]);

  return data ? (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#000",
          padding: 10,
        }}
      >
        <Text> Calendar </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          {data.map((d) => (
            <DateListing props={d} key={d.id} navigate={navigate} />
          ))}
        </View>
      </ScrollView>
    </View>
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
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
    width: 355,
    padding: 10,
    alignItems: "center",
  },
});
