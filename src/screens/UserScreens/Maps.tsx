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
import { color } from "react-native-reanimated";
import { colors } from "../../constants/palette";

export default function Maps({ navigation, props }) {
  const user = useSelector((state) => state?.user);
  const [pin, setPin] = useState({
    latitude: 33.8938,
    longitude: 35.5018,
  });

  const clickable = () => {
    console.log(pin);
  };

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
    navigation.pop();
  };
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.8938,
          longitude: 35.5018,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
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
            // onpress2();
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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "75%", //for center align
          alignSelf: "flex-start", //for align to right
        }}
      >
        <View
          style={{
            // position: "absolute", //use absolute position to show button on top of the map
            // top: "75%", //for center align
            // alignSelf: "flex-start", //for align to right
            flex: 1,

            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            onPress={onpress2}
          >
            <View style={styles.socialButtonContent}>
              <Text style={styles.loginText}>Done</Text>
            </View>
          </TouchableOpacity>
          {/* <Button color="#000" title={"okay"} onPress={clickable} /> */}
        </View>
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
    // borderRadius: 30,
    zIndex: 0,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  fabookButton: {
    backgroundColor: colors.blue,
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
