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

export default function Testing({ navigation, props }) {
  const EditImage = () => {
    console.log("in");
  };
  return (
    <View>
      <TouchableOpacity onPress={EditImage}>
        <View style={styles.header}></View>
      </TouchableOpacity>
      <Image style={styles.avatar} source={props.image} />
      <TouchableOpacity>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxtLabel}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Name:
              </Text>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {props.name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxtLabel}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Email:
              </Text>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {props.email}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxtLabel}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Phone:
              </Text>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                +961 {props.phone}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
          <View style={styles.socialButtonContent}>
            <Text style={styles.loginText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 40,
  },
  row: {
    // flexDirection: "row",
    // alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
    marginLeft: 20,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    // flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
    marginTop: 20,
  },
  nameTxtLabel: {
    marginLeft: 8,
    fontWeight: "600",
    color: "#585858",
    fontSize: 18,
    width: 170,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: "700",
    color: "#222",
    fontSize: 20,
    width: 300,
  },
  mblTxt: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgTxt: {
    fontWeight: "400",
    color: "#008B8B",
    fontSize: 12,
    marginLeft: 15,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
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
