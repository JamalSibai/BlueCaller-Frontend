import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../constants/palette";

import Appointments from "../screens/FreelancerScreens/Appointments";
import AddDates from "../screens/FreelancerScreens/AddDates";

import { NavigationContainer } from "@react-navigation/native";
import { OnboardingStack } from "./OnboardingStack";
import { HomeStack } from "./HomeStack";
import { ConnectionsStack } from "./ConnectionsStack";
import { FreelancerProfileStack } from "./FreelancerProfileStack";

export function FreelancerBottomTabs({ navigation }) {
  const BottomTabsNav = createBottomTabNavigator();
  const navigationRef = React.useRef(null);
  // const type = useSelector((state) => state?.user?.userType);

  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabsNav.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: "#000",
          inactiveTintColor: colors.background,
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
          name="Appointments"
          component={Appointments}
          options={{
            title: "Home",
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
          name="Connection"
          component={ConnectionsStack}
          options={{
            title: "Connection",
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"calendar-month"}
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
            title: "Add Dates",
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"calendar-month"}
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
      </BottomTabsNav.Navigator>
    </NavigationContainer>
  );
}
