import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { colors } from "../constants/palette";

export function OnboardingStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackNav.Navigator>
        <RootStackNav.Screen
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
        />
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}
