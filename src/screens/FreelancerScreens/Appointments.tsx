import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect, useRef, Component } from "react";
import { Picker } from "@react-native-picker/picker";
import EmptyState from "../../components/EmptyState";
import HistoryCard from "../../components/HistoryCard";
import axios from "axios";
import { useSelector } from "react-redux";
import DateListing from "../../components/DateListing";
import FreelancerClients from "../../components/FreelancerClients";
// import { Value } from "react-native-reanimated";

export default function Appointments({ navigation }) {
  const user = useSelector((state) => state?.user);
  const [data, setData] = useState(null);
  const [value, setValue] = useState(1);

  const userAppointment = async () => {
    console.log("in historyCard");
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/view-appointments`,
        {
          date: user.appointmentDate.date,
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
        alert("Successfuly Rated Freelancer!!");
      } else {
        setData(res.data);
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("in");
    userAppointment();
  }, [user.DoneFreelancer.Done]);

  return data ? (
    <View>
      <ScrollView>
        <View style={{ backgroundColor: "#fff", flex: 1 }}>
          {data.map((d) => (
            <FreelancerClients props={d} key={d.id} />
          ))}
        </View>
      </ScrollView>
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
