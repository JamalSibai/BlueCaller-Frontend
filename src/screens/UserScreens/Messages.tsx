import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import EmptyState from "../../components/EmptyState";
import Message from "../../components/Messages";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";

export default function Messages({ navigation }) {
  const [data, setData] = useState(null);
  const user = useSelector((state) => state?.user);

  const messagesRecieved = async () => {
    console.log("in presssearch");
    try {
      const res = await axios.get(
        `https://bluecaller.tk/api/auth/get-messages`,
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
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log("in");
    messagesRecieved();
  }, []);
  return data ? (
    <ScrollView>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        {data.map((d) => (
          <Message props={d} />
        ))}
      </View>
    </ScrollView>
  ) : (
    <EmptyState loading={true} key={props.message.id} />
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
