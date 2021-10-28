import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import { updateEditingProfile } from "../../redux/slices/userSlice";
import { colors } from "../../constants/palette";

export default function EditCategory({ navigation }) {
  const user = useSelector((state) => state?.user);
  const [selectedCategories, setSelectedCategories] = useState("");
  const [newCategory, setNewCategory] = useState(null);
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

  const EditCategory = async () => {
    if (newCategory == null) {
      return alert("Choose Category");
    }
    try {
      const res = await axios.post(
        `https://bluecaller.tk/api/auth/edit-category`,
        {
          category: newCategory,
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
        alert("Category Changed");
        store.dispatch(
          updateEditingProfile({
            editingProfile: {
              edited: newCategory,
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
        <Text style={styles.nameTxt}> Change Category </Text>
        <Picker
          selectedValue={selectedCategories}
          onValueChange={(value, index) => setNewCategory(value)}
          mode="dropdown" // Android only
          style={styles.picker}
        >
          {categories.map((c) => (
            <Picker.Item label={c} value={c} key={c} />
          ))}
        </Picker>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            onPress={EditCategory}
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
    backgroundColor: colors.blue,
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
