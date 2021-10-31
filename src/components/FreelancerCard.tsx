import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import axios from "axios";
import { useSelector } from "react-redux";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { colors } from "../constants/palette";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function FreelancerCard({
  navigation,
  props,
  longitude,
  latitude,
  date,
  region,
  category,
  key,
  abc,
}) {
  const user = useSelector((state) => state?.user);
  const [id, setId] = useState({ props });
  console.log(id);
  console.log("id");
  const onPressButton = async () => {
    abc();
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/user-appiontment`,
        {
          date: { date }.date,
          longitude: { longitude }.longitude,
          latitude: { latitude }.latitude,
          freelancer_id: id.props[0].id,
          description: "Hello From Frontend",
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
        console.log("Done");
      } else {
        console.log("Done");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.innerbox}>
            <Image
              style={styles.profileImage}
              source={{ uri: props[0].image }}
            />
            <View>
              <Text style={styles.name}>{props[0].name}</Text>

              <Text style={{ paddingLeft: 18 }}>
                {props[1].hourly_price}$/Hour
              </Text>
              <Rating
                style={{ paddingTop: 5, paddingLeft: 15, paddingBottom: 10 }}
                type="star"
                startingValue={props[2].rating}
                readonly
                imageSize={22}
                ratingCount={5}
              />
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <Button
              title="Book Now"
              color={colors.blue}
              onPress={() => onPressButton()}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
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
    // marginTop: 5,
    marginLeft: -40,
  },
  name: {
    fontSize: 25,

    marginLeft: 10,
    fontWeight: "bold",
    color: "#000",
    flex: 0.7,
    paddingLeft: 5,
  },
  rating: {
    fontSize: 20,
    marginTop: 2,
    marginBottom: 2,
    fontWeight: "bold",
    color: "#000",
    flex: 0.5,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 280,
    marginTop: -50,
    // borderRadius: 30,
  },
  loginText: {
    color: "white",
  },
  fabookButton: {
    backgroundColor: "#000",
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
