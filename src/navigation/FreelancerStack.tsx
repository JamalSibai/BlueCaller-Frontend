import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../constants/palette";

import Appointments from "../screens/FreelancerScreens/Appointments";
import AddDates from "../screens/FreelancerScreens/AddDates";
import Messages from "../screens/UserScreens/Messages";

import { NavigationContainer } from "@react-navigation/native";
import { OnboardingStack } from "./OnboardingStack";
import { HomeStack } from "./HomeStack";
import { ConnectionsStack } from "./ConnectionsStack";
import { FreelancerProfileStack } from "./FreelancerProfileStack";
import { AppointmentStack } from "./AppointmentStack";

export function FreelancerBottomTabs({ navigation }) {
  const BottomTabsNav = createBottomTabNavigator();
  const navigationRef = React.useRef(null);
  // const type = useSelector((state) => state?.user?.userType);

  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabsNav.Navigator
        initialRouteName="Appointments"
        tabBarOptions={{
          activeTintColor: "#000",
          inactiveTintColor: "#707070",
          showLabel: true,
          allowFontScaling: false,
          keyboardHidesTabBar: true,
          shadowColor: "#FFF",
          labelStyle: {
            fontWeight: "bold",
            fontSize: 10,
          },
        }}
      >
        <BottomTabsNav.Screen
          name="Connection"
          component={ConnectionsStack}
          options={{
            title: "Connection",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"pipe-disconnected"}
                size={28}
                color={color}
              />
            ),
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <BottomTabsNav.Screen
          name="Add Dates"
          component={AddDates}
          options={{
            title: "Availability",
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"calendar"}
                size={28}
                color={color}
              />
            ),
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <BottomTabsNav.Screen
          name="Appointments"
          component={AppointmentStack}
          options={{
            title: "Appointments",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"check-network-outline"}
                size={28}
                color={color}
              />
            ),

            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <BottomTabsNav.Screen
          name="Profile"
          component={FreelancerProfileStack}
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"account-hard-hat"}
                size={28}
                color={color}
              />
            ),
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        {/* <BottomTabsNav.Screen
          name="Messages"
          component={Messages}
          options={{
            title: "Messages",
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"android-messages"}
                size={28}
                color={color}
              />
            ),
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        /> */}
      </BottomTabsNav.Navigator>
    </NavigationContainer>
  );
}
