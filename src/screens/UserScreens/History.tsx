import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import EmptyState from "../../components/EmptyState";
import HistoryCard from "../../components/HistoryCard";

export default function History({ navigation }) {
  const [data, setData] = useState(null);
  const user = useSelector((state) => state?.user);

  const userHistory = async () => {
    console.log("in userConnection");
    try {
      const res = await axios.get(
        `https://bluecaller.tk/api/auth/view-past-orders`,
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
        setData(res.data);
        // console.log("here");
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("in");
    userHistory();
  }, []);

  return data ? (
    <ScrollView>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        {data.map((d) => (
          <HistoryCard props={d} key={d.id} />
        ))}
      </View>
    </ScrollView>
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
});
