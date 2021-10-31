import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import FreelancerCard from "../../components/FreelancerCard";
import EmptyState from "../../components/EmptyState";

export default function Freelancers({ navigation }) {
  const user = useSelector((state) => state?.user);
  const [data, setData] = useState(null);
  const [variable, setVariable] = useState(1);

  const [expoPushToken, setExpoPushToken] = useState(
    "ExponentPushToken[SzrSP3I1NEFLpODtIZp3oi]"
  );
  async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Blue Caller",
      body: "Hey Freelancer!! You Have A new appointment",
      data: { someData: "goes here" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

  const pressSearch = async () => {
    console.log("in presssearch");
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/user-search`,
        {
          category: user.freelancerSearch.category,
          date: user.freelancerSearch.date,
          region: user.freelancerSearch.region,
        },
        {
          headers: {
            Authorization: "bearer " + user.userProfile.token,
            Accept: "application / json",
          },
        }
      );
      if (res.data.hasOwnProperty("status")) {
        setData(null);
      } else {
        if (res.data.length == 0) {
          alert("There is no available freelancers from this search!");
          navigation.pop();
        }
        setData(res.data);
        console.log("here");
        console.log(res.data[0][0].id);
      }
    } catch (err) {
      console.log(err);
      alert("There is no available freelancers from this search!");
      navigation.pop();
    }
  };
  const abc = async () => {
    await sendPushNotification(expoPushToken);
    alert("Appointment Reserved");
    setVariable(Math.floor(Math.random()));
    navigation.pop();
  };

  useEffect(() => {
    console.log("in");
    pressSearch();
  }, [variable]);

  return data ? (
    <ScrollView>
      <View style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
        {data.map((d) => (
          <FreelancerCard
            props={d}
            longitude={user.freelancerSearch.longitude}
            latitude={user.freelancerSearch.latitude}
            date={user.freelancerSearch.date}
            category={user.freelancerSearch.category}
            region={user.freelancerSearch.region}
            key={d[0].id}
            abc={abc}
          />
        ))}
      </View>
    </ScrollView>
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
});
