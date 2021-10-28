import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { updateEditingProfile } from "../../redux/slices/userSlice";
import { colors } from "../../constants/palette";

export default function EditPrice({ navigation }) {
  const user = useSelector((state) => state?.user);
  const [newPrice, setNewPrice] = useState("");

  const editPrice = async () => {
    if (newPrice == "") {
      return alert("Enter a Price");
    }
    if (!parseInt(newPrice)) {
      return alert("Price should be an integer");
    }
    if (newPrice.toString().length > 3) {
      return alert("Enter a Valid Price");
    }
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/edit-price`,
        {
          hourly_price: newPrice,
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
        alert("Price Edited");
        store.dispatch(
          updateEditingProfile({
            editingProfile: {
              edited: newPrice,
            },
          })
        );

        navigation.pop();
      } else {
        // reload();
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignItems: "center", marginTop: 200, borderWidth: 1 }}>
        <Text style={styles.nameTxt}> Change Price </Text>
        <TextInput
          style={styles.nameTxt}
          placeholder="Edit Price"
          placeholderTextColor="grey"
          onChangeText={(Price) => setNewPrice(Price)}
        />
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            onPress={editPrice}
          >
            <View style={styles.socialButtonContent}>
              <Text style={styles.loginText}>Edit</Text>
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
  },
  loginText: {
    color: "white",
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
