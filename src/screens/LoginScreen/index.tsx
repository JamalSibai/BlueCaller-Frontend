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
                  UserType: "1",
                  token:
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYmx1ZWNhbGxlci50a1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzNDk4MTY4MSwiZXhwIjoxNjM1NTg2NDgxLCJuYmYiOjE2MzQ5ODE2ODEsImp0aSI6ImNFa1gyRHdPUzkxRjNSbmEiLCJzdWIiOjYsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.5TUj61FxvVdILQqLX5LUMIN2EG7U-zrUyCxnSSTW3MQ",
                  // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYmx1ZWNhbGxlci50a1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzNDkyNDUxNSwiZXhwIjoxNjM1NTI5MzE1LCJuYmYiOjE2MzQ5MjQ1MTUsImp0aSI6IkZhY21ZWEV3Qjk0Y0VBTWsiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.27C3fTir-yvwfzgiqWLj4gTkDFzPOS7P1xM3CSdKa30",
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
