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
import { updateUserProfile } from "../../redux/slices/userSlice";
import { updateEditingProfile } from "../../redux/slices/userSlice";
import { updateDoneFreelancer } from "../../redux/slices/userSlice";
import { updateFreelancerSearch } from "../../redux/slices/userSlice";
import { store } from "../../redux/store";
import axios from "axios";

export default function login({ navigation, props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const user = useSelector((state) => state?.user);

  const Register = () => {
    navigation.navigate("User Register");
  };
  const freelancerRegister = () => {
    navigation.navigate("Freelancer Register");
  };

  const login = async () => {
    if (email == "") {
      return alert("Enter Email");
    }
    if (password == "") {
      return alert("Enter Password");
    }
    try {
      const res = await axios.post(`https://bluecaller.tk/api/auth/login`, {
        email: email,
        password: password,
      });
      if (res.data.hasOwnProperty("status")) {
        console.log("here");
      } else {
        // setData(null);
        console.log(res.data.access_token);
        store.dispatch(
          updateFreelancerSearch({
            freelancerSearch: {
              latitude: "",
              longitude: "",
            },
          })
        );
        store.dispatch(
          updateDoneFreelancer({
            DoneFreelancer: {
              Done: "data.id",
            },
          })
        );
        store.dispatch(
          updateEditingProfile({
            editingProfile: {
              edited: "newName",
            },
          })
        );
        store.dispatch(
          updateUserProfile({
            userProfile: {
              uid: res.data.user.id,
              email: res.data.user.email,
              Name: res.data.user.name,
              profileImage: res.data.user.image,
              UserType: res.data.user.user_type,
              token: res.data.access_token,
              // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYmx1ZWNhbGxlci50a1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzNDk4MTY4MSwiZXhwIjoxNjM1NTg2NDgxLCJuYmYiOjE2MzQ5ODE2ODEsImp0aSI6ImNFa1gyRHdPUzkxRjNSbmEiLCJzdWIiOjYsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.5TUj61FxvVdILQqLX5LUMIN2EG7U-zrUyCxnSSTW3MQ",
              //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYmx1ZWNhbGxlci50a1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzNDkyNDUxNSwiZXhwIjoxNjM1NTI5MzE1LCJuYmYiOjE2MzQ5MjQ1MTUsImp0aSI6IkZhY21ZWEV3Qjk0Y0VBTWsiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.27C3fTir-yvwfzgiqWLj4gTkDFzPOS7P1xM3CSdKa30",
            },
          })
        );
      }
    } catch (err) {
      alert("Wrong Email or Password!");
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require("../../../assets/white.jpg")}
      />

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

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={login}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainerRegister}
        onPress={Register}
      >
        <Text style={styles.btnText}>User Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainerRegister}
        onPress={freelancerRegister}
      >
        <Text style={styles.btnText}>Freelancer Register</Text>
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
    // backgroundColor: "transparent",
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
