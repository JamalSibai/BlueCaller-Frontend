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
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { store } from "../../redux/store";
import { updateFreelancerSearch } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";

export default function Maps({ navigation, props }) {
  const user = useSelector((state) => state?.user);
  const [pin, setPin] = useState({
    latitude: 33.8938,
    longitude: 35.5018,
  });

  const onpress2 = () => {
    store.dispatch(
      updateFreelancerSearch({
        freelancerSearch: {
          latitude: pin.latitude,
          longitude: pin.longitude,
        },
      })
    );
    console.log("in");
    navigation.navigate("Home");
  };
  return (
    <View>
      {/* <Button title={"okay"} /> */}
      {/* <TouchableOpacity
        style={[styles.buttonContainer, styles.fabookButton]}
        // onPress={Logout}
      >
        <View style={styles.socialButtonContent}>
          <Text style={styles.loginText}>Logout</Text>
        </View>
      </TouchableOpacity> */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.8938,
          longitude: 35.5018,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // provider="google"
      >
        <Marker
          coordinate={pin}
          pinColor="black"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag start" + e.nativeEvent.coordinates);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            onpress2();
            console.log(pin);
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
      </MapView>
      <View
        style={{
          position: "absolute", //use absolute position to show button on top of the map
          top: "75%", //for center align
          alignSelf: "flex-end", //for align to right
          alignItems: "center",
        }}
      >
        <Button title={"okay"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    zIndex: 0,
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
