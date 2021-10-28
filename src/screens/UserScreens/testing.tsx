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
import { Rating } from "react-native-ratings";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export default function Testing({ navigation, props }) {
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
    console.log(token);
    return token;
  }
  return (
    <View style={styles.formContent}>
      <View style={styles.notificationBox}>
        <Image
          style={styles.image}
          source={{
            uri: "https://bluecaller.tk/storage/Me8inkaENWQGbmCvdXjsbF4ZEAE2dGEVnbgKs8YB.jpg",
          }}
        />

        <Text style={styles.name}>I AM COMING</Text>
      </View>
      <Button title={"press"} onPress={registerForPushNotificationsAsync} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
  formContent: {
    flexDirection: "row",
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    borderRadius: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
    alignSelf: "center",
    marginRight: 10,
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
