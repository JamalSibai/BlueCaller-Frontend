import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Dimensions,
  Platform,
  Linking,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { colors } from "../../constants/palette";

export default function userRegister({ navigation, props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [firebase_token, setFirebase_token] = useState("");

  const login = () => {
    navigation.navigate("Freelancer Register");
  };

  async function registerForPushNotificationsAsync() {
    console.log("in");
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    console.log(token);
    setFirebase_token(token);
    return token;
  }

  const register = async () => {
    // await registerForPushNotificationsAsync();
    if (!name) {
      alert("Please enter your  name");
    } else if (!email) {
      alert("Please enter your email");
    } else if (!email.includes("@gmail.com")) {
      alert("Please enter a valid email");
    } else if (!password) {
      alert("Please enter your password");
    } else if (password.length < 5) {
      alert("Please enter a valid password");
    } else if (!phone) {
      alert("Please enter your phone number");
    } else {
      await registerForPushNotificationsAsync();
      try {
        const res = await axios.post(
          `https://bluecaller.tk/api/auth/register`,
          {
            name: name,
            email: email,
            password: password,
            password_confirmation: password,
            phone: phone,
            user_type: 0,
            firebase_token: firebase_token,
          }
        );
        if (res.data.hasOwnProperty("status")) {
          console.log(res.data);
          // console.log("hey");
          // console.log(name);
          // console.log(email);
          // console.log(password);
          // console.log(phone);
          // console.log(firebase_token);
          alert("User Successfuly Registered");
          navigation.pop();
        } else {
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require("../../../assets/white.jpg")}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Name"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={(email) => setEmail(email)}
        />
        <Image
          style={styles.inputIcon}
          source={{
            uri: "https://img.icons8.com/flat_round/40/000000/secured-letter.png",
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={(password) => setPassword(password)}
        />
        <Image
          style={styles.inputIcon}
          source={{
            uri: "https://img.icons8.com/color/40/000000/password.png",
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Phone Number"
          underlineColorAndroid="transparent"
          onChangeText={(Phone) => setPhone(Phone)}
        />
      </View>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={registerForPushNotificationsAsync}
      >
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainerRegister}>
        <Text style={styles.btnText}>Are you a freelancer?</Text>
        <TouchableOpacity onPress={login}>
          <Text style={styles.btnTextRegister}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  buttonContainerRegister: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  btnByRegister: {
    height: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    width: 300,
    backgroundColor: "transparent",
  },
  loginButton: {
    backgroundColor: colors.blue,

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: "white",
  },
  bgImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  btnText: {
    color: "#000",
    fontWeight: "bold",
  },
  btnTextRegister: {
    color: colors.blue,
    fontWeight: "bold",
    marginLeft: 3,
  },
  textByRegister: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",

    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
