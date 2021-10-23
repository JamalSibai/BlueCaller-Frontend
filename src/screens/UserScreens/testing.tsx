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
// import MapView, { Callout, Circle, Marker } from "react-native-maps";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Testing({ navigation, props }) {
  const onPressButton = () => {
    console.log("hey");
  };
  const [expoPushToken, setExpoPushToken] = useState(
    "ExponentPushToken[nr4VAEICkGsMvFWwobzNaV]"
  );
  async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Original Title",
      body: "And here is the body!",
      data: { someData: "goes here" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

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
    <SafeAreaView>
      <View style={{ margin: 15 }}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <Image
              style={[styles.image, styles.imageContent]}
              source={{ uri: props.image }}
            />
            <Text style={styles.name}>Jamal Sibai</Text>
          </View>
          <View style={[styles.cardContent, styles.tagsContent]}>
            <Text>please Help my electricty went off </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{ color: "blue" }}
          onPress={() =>
            Linking.openURL(
              "https://maps.google.com/?q=" + 33.8938 + "," + 35.5018
            )
          }
        >
          Google
        </Text>
        <TouchableOpacity
          onPress={async () => await sendPushNotification(expoPushToken)}
        >
          <Text> Send Message </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  card: {
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 0,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    borderTopWidth: 40,
    marginBottom: 20,
    borderBottomWidth: 5,
  },
  cardContent: {
    flexDirection: "row",
    marginLeft: 10,
  },
  imageContent: {
    marginTop: -40,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: "wrap",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "center",
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: "#eee",
    marginTop: 5,
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
