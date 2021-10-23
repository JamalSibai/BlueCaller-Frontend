import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function DateListing({ props, navigate }) {
  const [data, setData] = useState({ props });
  // const [date, setDate] = useState({ data.props.date_of_day });

  const Press = () => {
    console.log(data.props.date_of_day);
    navigate(data.props.date_of_day);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => Press()}>
        <View style={styles.notificationBox}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.description}>Date :</Text>
            <Text style={styles.description2}>{data.props.date_of_day}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    padding: 20,
    margin: 5,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    borderRadius: 10,
  },
  description: {
    fontSize: 18,
    color: "#000",
    marginLeft: 10,
  },
  description2: {
    fontSize: 18,
    color: "#000",
    marginLeft: 80,
    // flexDirection:"space_between",
  },
});
