import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useRef, Component } from "react";
import EmptyState from "../../components/EmptyState";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { colors } from "../../constants/palette";
import Order from "../../components/Order";

export default function Orders({ navigation }) {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state?.user);

  const userOrders = async () => {
    try {
      const res = await axios.get(
        `https://bluecaller.tk/api/auth/getUserAppointments`,
        {
          headers: {
            Authorization: "bearer " + user.userProfile.token,
            Accept: "application / json",
          },
        }
      );
      if (res.data.hasOwnProperty("status")) {
        // setData(res.data);
        // console.log(res.data);
        // console.log(data);
      } else {
        setData(res.data);
        // console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userOrders();
  }, []);

  const openOrder = (items) => {
    // console.log(items);

    navigation.navigate("Details", { items: items });
  };

  return data ? (
    <View style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Order props={item} onPress={() => openOrder(item)} />;
        }}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
  );
}

const styles = StyleSheet.create({});
