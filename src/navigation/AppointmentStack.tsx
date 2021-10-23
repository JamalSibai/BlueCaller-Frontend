import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Appointments from "../screens/FreelancerScreens/Appointments";
import Calendar from "../screens/FreelancerScreens/Calendar";

import { colors } from "../constants/palette";

export function AppointmentStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <RootStackNav.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <RootStackNav.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: "Calendar",
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
        name="Appointments"
        component={Appointments}
        options={{
          title: "Appointments",
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
  );
}
