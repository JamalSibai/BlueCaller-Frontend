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
import { Picker } from "@react-native-picker/picker";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import axios from "axios";

export default function freelancerRegister({ navigation, props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [hourly_price, setHourly_price] = useState("");
  const [firebase_token, setFirebase_token] = useState("");

  const [selectedRegions, setSelectedRegions] = useState("");
  const [selectedCategories, setSelectedCategories] = useState("");

  const [regions] = useState(
    [
      "Akkar",
      "Baalbeck-Hermel",
      "Beirut",
      "Bekaa",
      "Mount Lebanon",
      "North Lebanon",
      "Nabatiyeh",
      "South Lebanon",
    ].sort()
  );
  const [categories] = useState(
    [
      "Electricity",
      "Air Conditioning",
      "Satellite",
      "Pluming",
      "Carpentry",
      "Welding",
      "General Constraction",
      "Car Mechanic",
      "Car Electricity",
      "Tires Expert",
      "Glass and Aluminum",
      "Elevator Maintenance",
    ].sort()
  );

  const login = () => {
    navigation.pop();
  };

  async function registerForPushNotificationsAsync() {
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
    // console.log(token);
    setFirebase_token(token);
  }

  const register = async () => {
    // if (email == "") {
    //   return alert("Enter Email");
    // }
    // if (password == "") {
    //   return alert("Enter Password");
    // }
    registerForPushNotificationsAsync();
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/freelancerregister`,
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: password,
          phone: phone,
          user_type: 0,
          firebase_token: firebase_token,
          category: selectedCategories,
          hourly_price: hourly_price,
          region: selectedRegions,
        }
      );
      if (res.data.hasOwnProperty("status")) {
        console.log(res.data);
        console.log(res);
        console.log("hey");
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(phone);
        console.log(selectedCategories);
        console.log(hourly_price);
        console.log(selectedRegions);
        console.log(firebase_token);
        alert("User Successfuly Registered");
        navigation.pop();
      } else {
        // setData(null);
        console.log(res);
        console.log("hey");
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(phone);
        console.log(selectedCategories);
        console.log(hourly_price);
        console.log(selectedRegions);
        console.log(firebase_token);
      }
    } catch (err) {
      alert("Wrong Email or Password!");
      console.log(err);
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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Price Per Hour"
          underlineColorAndroid="transparent"
          onChangeText={(price) => setHourly_price(price)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Picker
          selectedValue={selectedRegions}
          onValueChange={(value, index) => setSelectedRegions(value)}
          mode="dropdown" // Android only
          style={styles.inputs}
        >
          {regions.map((r) => (
            <Picker.Item label={r} value={r} key={r} />
          ))}
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={selectedCategories}
          onValueChange={(value, index) => setSelectedCategories(value)}
          mode="dropdown" // Android only
          style={styles.inputs}
        >
          {categories.map((c) => (
            <Picker.Item label={c} value={c} key={c} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={register}
      >
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainerRegister} onPress={login}>
        <Text style={styles.btnText}>Login?</Text>
      </TouchableOpacity>
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
    // marginBottom: 20,
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
    backgroundColor: "#000",

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
    // resizeMode,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  btnText: {
    color: "#000",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
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
