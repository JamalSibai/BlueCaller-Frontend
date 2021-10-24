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
import { Rating } from "react-native-ratings";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export default function Testing({ navigation, props }) {
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
        onPress={() => this.onClickListener("login")}
      >
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainerRegister}
        onPress={() => this.onClickListener("register")}
      >
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

// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Image,
//   TouchableOpacity,
//   TouchableHighlight,
//   TextInput,
//   Dimensions,
// } from "react-native";
// import React, { useState } from "react";
// import { Rating } from "react-native-ratings";
// import MapView, { Callout, Circle, Marker } from "react-native-maps";

// export default function Maps({ navigation, props }) {
//   const [pin, setPin] = useState({
//     latitude: 33.8938,
//     longitude: 35.5018,
//   });
//   return (
//     <View>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 33.8938,
//           longitude: 35.5018,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         // provider="google"
//       >
//         <Marker
//           coordinate={pin}
//           pinColor="black"
//           draggable={true}
//           onDragStart={(e) => {
//             console.log("Drag start" + e.nativeEvent.coordinates);
//           }}
//           onDragEnd={(e) => {
//             setPin({
//               latitude: e.nativeEvent.coordinate.latitude,
//               longitude: e.nativeEvent.coordinate.longitude,
//             });
//             console.log(pin);
//           }}
//         >
//           <Callout>
//             <Text>I'm here</Text>
//           </Callout>
//         </Marker>
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });
