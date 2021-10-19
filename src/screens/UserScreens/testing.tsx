import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";

export default function Testing({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.innerbox}>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://bluecaller.tk/storage/Me8inkaENWQGbmCvdXjsbF4ZEAE2dGEVnbgKs8YB.jpg",
            }}
          />
          <View>
            <Text style={styles.name}>John Doe</Text>
            <Text style={{ paddingLeft: 10 }}>10$/Hour </Text>
            <Rating
              style={{ paddingLeft: 10, paddingTop: 5 }}
              type="star"
              startingValue={4}
              readonly
              imageSize={22}
              ratingCount={5}
            />
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <Button
            title="Book Now"
            color="#000"
            onPress={() => console.log("clicked")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  box: {
    marginTop: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    paddingTop: 10,
  },
  innerbox: {
    flexDirection: "row",
  },
  profileImage: {
    width: 150,
    height: 100,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 0.3,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    marginTop: 10,
  },
  name: {
    fontSize: 25,
    marginTop: 10,
    // marginBottom: 10,
    marginLeft: 10,
    fontWeight: "bold",
    color: "#000",
    flex: 0.7,
  },
  rating: {
    fontSize: 20,
    marginTop: 2,
    marginBottom: 2,
    fontWeight: "bold",
    color: "#000",
    flex: 0.5,
  },
});
