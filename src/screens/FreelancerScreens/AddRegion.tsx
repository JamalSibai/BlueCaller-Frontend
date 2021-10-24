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
import { Picker } from "@react-native-picker/picker";

export default function AddRegion({ navigation }) {
  const [newRegion, setNewRegion] = useState(null);
  const [selectedRegions, setSelectedRegions] = useState("");
  const user = useSelector((state) => state?.user);

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

  const EditRegion = async () => {
    if (newRegion == null) {
      return alert("Choose Category");
    }
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/edit-region`,
        {
          region: newRegion,
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
        alert("Region Changed");
        store.dispatch(
          updateEditingProfile({
            editingProfile: {
              edited: newRegion,
            },
          })
        );
        console.log(res.data);
        navigation.navigate("Profile");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignItems: "center", marginTop: 200, borderWidth: 1 }}>
        <Text style={styles.nameTxt}> Change Region </Text>
        <Picker
          selectedValue={newRegion}
          onValueChange={(value, index) => setNewRegion(value)}
          mode="dropdown" // Android only
          style={styles.picker}
        >
          {regions.map((r) => (
            <Picker.Item label={r} value={r} key={r} />
          ))}
        </Picker>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            onPress={EditRegion}
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
