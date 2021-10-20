import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { store } from "../../redux/store";
import { deleteUser } from "../../redux/slices/userSlice";

export default function Profile({ navigation }) {
  const onpress = () => {
    navigation.navigate("Edit Image");
  };
  const onpress2 = () => {
    navigation.navigate("Edit Name");
  };
  const onpress3 = () => {
    navigation.navigate("Edit Phone Number");
  };
  const onpress4 = () => {
    navigation.navigate("Change Password");
  };

  const Logout = () => {
    store.dispatch(deleteUser());
  };

  return (
    // <View>
    //   <TouchableOpacity onPress={onpress}>
    //     <Text> Edit Image </Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={onpress2}>
    //     <Text> Edit Name </Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={onpress3}>
    //     <Text> Edit Phone Number </Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={onpress4}>
    //     <Text> Edit Password </Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity onPress={Logout}>
    //     <Text> Logout </Text>
    //   </TouchableOpacity>
    // </View>
    <View style={{ backgroundColor: "white" }}>
      <TouchableOpacity onPress={onpress}>
        <View style={styles.header}></View>
      </TouchableOpacity>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://bluecaller.tk/storage/Me8inkaENWQGbmCvdXjsbF4ZEAE2dGEVnbgKs8YB.jpg",
        }}
      />
      <TouchableOpacity onPress={onpress2}>
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
                Jamal Sibai
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onpress4}>
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
                "Jamal@gmail.com"
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onpress3}>
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
                +961 76630304
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
    paddingBottom: 10,
    // marginLeft: 20,
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
    marginLeft: 28,
    fontWeight: "600",
    color: "#585858",
    fontSize: 18,
    width: 170,
  },
  nameTxt: {
    marginLeft: 35,
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
