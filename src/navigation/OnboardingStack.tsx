import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import login from "../screens/LoginScreen/login";
import RegisterScreen from "../screens/RegisterScreen";
import userRegister from "../screens/RegisterScreen/userRegister";
import freelancerRegister from "../screens/RegisterScreen/freelancerRegister";
import { colors } from "../constants/palette";

export function OnboardingStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackNav.Navigator>
        {/* <RootStackNav.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Freelancers",
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        <RootStackNav.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Freelancers",
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        /> */}

        <RootStackNav.Screen
          name="login"
          component={login}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <RootStackNav.Screen
          name="User Register"
          component={userRegister}
          options={{
            title: "User Register",
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <RootStackNav.Screen
          name="Freelancer Register"
          component={freelancerRegister}
          options={{
            title: "Freelancer Register",
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}
