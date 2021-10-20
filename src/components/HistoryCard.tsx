import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";

export default function HistoryCard({ navigation, props }) {
  let rate;
  const ratingCompleted = (rating: number) => {
    console.log("Rating is: " + rating);
    rate = rating;
    console.log("rate me " + rate);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.userImage} source={props.image} />
      <View style={styles.cardFooter}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.position}>Rate Freelancer</Text>
          <Rating
            style={{ paddingLeft: 10, paddingTop: 5 }}
            type="star"
            imageSize={22}
            ratingCount={5}
            onFinishRating={ratingCompleted}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: "white",
    flexBasis: "46%",
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    border: 10,
  },
  userImage: {
    height: 120,
    width: 120,
    borderRadius: 10,
    alignSelf: "center",
    borderColor: "#000",
    borderWidth: 3,
    marginTop: 5,
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "#000",
    fontWeight: "bold",
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: "center",
    color: "#696969",
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
});