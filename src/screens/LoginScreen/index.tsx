import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import EmptyState from "../../components/EmptyState";
import { store } from "../../redux/store";
import { updateUserProfile } from "../../redux/slices/userSlice";
import { useNavigation } from "@react-navigation/core";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <EmptyState
        // loading={true}
        icon={"coffee"}
        title={"Login Screen"}
        description={"here you will have your login screen"}
        actionButton={{
          title: "Login",
          callback: () => {
            store.dispatch(
              updateUserProfile({
                userProfile: {
                  uid: "14",
                  email: "jamal@gmail.com",
                  Name: "Jamal",
                  profileImage:
                    "https://bluecaller.tk/storage/Me8inkaENWQGbmCvdXjsbF4ZEAE2dGEVnbgKs8YB.jpg",
                  UserType: "0",
                  firebase_token: "ExponentPushToken[5RBES7Ixh6sgwQpqy1quK3]",
                },
              })
            );
          },
        }}
        secondaryButton={{
          title: "Register",
          callback: () => {
            navigation.navigate("RegisterScreen");
          },
        }}
      />
    </View>
  );
};

export default LoginScreen;
