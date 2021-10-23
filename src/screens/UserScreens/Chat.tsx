import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import EmptyState from "../../components/EmptyState";
import ListingProfile from "../../components/ListingProfiles";
import { store } from "../../redux/store";
import { updateMessage_id } from "../../redux/slices/userSlice";
import Messages from "./Messages";
import Message from "../../components/Messages";

export default function Chat({ navigation }) {
  const user = useSelector((state) => state?.user);
  // console.log("in chat", user.message_id.user_id);
  const [sendmessage, setMessage] = useState("");

  const sendMessage = async () => {
    if (sendmessage == "") {
      alert("Insert a message");
    }
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/send-message`,
        {
          receiver_id: user.message_id.user_id,
          message: sendmessage,
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
      } else {
        // setData(null);
        console.log("Done");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [name, setName] = useState(null);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignItems: "center", marginTop: 200, borderWidth: 1 }}>
        <Text style={styles.nameTxt}> Send Message </Text>
        <TextInput
          style={styles.nameTxtMessage}
          placeholder="Message ..."
          placeholderTextColor="grey"
          onChangeText={(message) => setMessage(message)}
        />
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            onPress={sendMessage}
          >
            <View style={styles.socialButtonContent}>
              <Text style={styles.loginText}>Send</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  nameTxt: {
    marginLeft: 35,
    fontWeight: "700",
    color: "#222",
    fontSize: 20,
    width: 300,
    marginTop: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  nameTxtMessage: {
    marginLeft: 35,
    fontWeight: "700",
    color: "#222",
    fontSize: 20,
    width: 300,
    marginTop: 10,
    // alignItems: "center",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    // borderWidth: 1,
    borderColor: "#666",
    alignItems: "center",
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
