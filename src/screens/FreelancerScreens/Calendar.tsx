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
  // const [Dates] = useState(
  //   [
  //     "2021-12-25",
  //     "2021-12-26",
  //     "2021-12-28",
  //     "2021-12-23",
  //     "2021-12-1",
  //     "2021-12-24",
  //   ].sort()
  // );

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
    console.log("in userConnection");
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
        // setData();
        // console.log(res.data[0].date_of_day);
        // for (let i = 0; i < res.data.length; i++) {
        //   // console.log(res.data[i].date_of_day);
        //   data.push(res.data[i].date_of_day);
        // }
        setData(res.data);
        console.log(res.data[0].date_of_day);
        console.log(data);
        // setValue(1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("in");
    userDates();
  }, []);

  return data ? (
    <View>
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
      <ScrollView>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          {data.map((d) => (
            <DateListing props={d} key={d.id} navigate={navigate} />
          ))}
        </View>
      </ScrollView>

      {/* <Picker
        selectedValue={"date"}
        onValueChange={(value, index) => setDate(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        {data.map((d) => (
          <Picker.Item label={d} value={d} key={d} />
        ))}
      </Picker> */}
    </View>
  ) : (
    <EmptyState loading={true} />
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
