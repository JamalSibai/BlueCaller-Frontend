import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { store } from "../../redux/store";
import { deleteUser } from "../../redux/slices/userSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import EmptyState from "../../components/EmptyState";
import { updateEditingProfile } from "../../redux/slices/userSlice";

export default function FreelancerProfile({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [category, setCategory] = useState(null);
  const [region, setRegion] = useState(null);
  const [price, setPrice] = useState(null);
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const user = useSelector((state) => state?.user);

  const onpress = () => {
    navigation.navigate("Edit Image");
  };
  const onpress2 = () => {
    navigation.navigate("Edit Name");
  };
  const onpress3 = () => {
    navigation.navigate("Edit Phone Number");
  };
  const onpress4 = () => {
    navigation.navigate("Change Password");
  };
  const onpress5 = () => {
    navigation.navigate("Edit Price");
  };
  const onpress6 = () => {
    navigation.navigate("Edit Category");
  };
  const onpress7 = () => {
    navigation.navigate("Add Region");
  };
  const Logout = () => {
    store.dispatch(deleteUser());
  };

  const userProfile = async () => {
    try {
      const res = await axios.get(
        `https://bluecaller.tk/api/auth/get-freelancer-profile`,
        {
          headers: {
            Authorization: "bearer " + user.userProfile.token,
            Accept: "application / json",
          },
        }
      );
      if (res.data.hasOwnProperty("status")) {
      } else {
        setData(res.data);
        setName(res.data[0][0].name);
        setEmail(res.data[0][0].email);
        setPhone(res.data[0][0].phone);
        setImage(res.data[0][0].image);
        setCategory(res.data[3]);
        setRegion(res.data[1]);
        setPrice(res.data[2]);
        setData(res.data);

        console.log();
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userProfile();
  }, [user.editingProfile.edited]);

  return data ? (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={onpress}>
          <View style={styles.header}></View>
        </TouchableOpacity>
        <Image style={styles.avatar} source={{ uri: image }} />

        <TouchableOpacity onPress={onpress2}>
          <View style={styles.row}>
            <View>
              <View style={styles.nameContainer}>
                <Text
                  style={styles.nameTxtLabel}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Name:
                </Text>
                <Text
                  style={styles.nameTxt}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {name}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onpress4}>
          <View style={styles.row}>
            <View>
              <View style={styles.nameContainer}>
                <Text
                  style={styles.nameTxtLabel}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Email:
                </Text>
                <Text
                  style={styles.nameTxt}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {email}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onpress3}>
          <View style={styles.row}>
            <View>
              <View style={styles.nameContainer}>
                <Text
                  style={styles.nameTxtLabel}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Phone:
                </Text>
                <Text
                  style={styles.nameTxt}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  +961 {phone}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onpress6}>
          <View style={styles.row}>
            <View>
              <View style={styles.nameContainer}>
                <Text
                  style={styles.nameTxtLabel}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Category:
                </Text>
                <Text
                  style={styles.nameTxt}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {category}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onpress7}>
          <View style={styles.row}>
            <View>
              <View style={styles.nameContainer}>
                <Text
                  style={styles.nameTxtLabel}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Region
                </Text>
                <Text
                  style={styles.nameTxt}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {region}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onpress5}>
          <View style={styles.row}>
            <View>
              <View style={styles.nameContainer}>
                <Text
                  style={styles.nameTxtLabel}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Price Per Hour
                </Text>
                <Text
                  style={styles.nameTxt}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {price}$
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.fabookButton]}
            onPress={Logout}
          >
            <View style={styles.socialButtonContent}>
              <Text style={styles.loginText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  ) : (
    <EmptyState loading={true} icon={"coffee"} />
  );
}

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: "pink",
    marginHorizontal: 0,
  },
  header: {
    backgroundColor: "#000",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 40,
  },
  row: {
    // flexDirection: "row",
    // alignItems: "center",
    borderColor: "#DCDCDC",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    padding: 10,
    paddingBottom: 10,
    // marginLeft: 20,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    // flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
    marginTop: 10,
    marginBottom: 10,
  },
  nameTxtLabel: {
    marginLeft: 28,
    fontWeight: "600",
    color: "#585858",
    fontSize: 15,
    width: 170,
  },
  nameTxt: {
    marginLeft: 28,
    fontWeight: "700",
    color: "#222",
    fontSize: 20,
    width: 300,
  },
  mblTxt: {
    fontWeight: "200",
    color: "#777",
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgTxt: {
    fontWeight: "400",
    color: "#008B8B",
    fontSize: 12,
    marginLeft: 15,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    // borderRadius: 30,
  },
  loginText: {
    color: "white",
  },
  fabookButton: {
    backgroundColor: "red",
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
