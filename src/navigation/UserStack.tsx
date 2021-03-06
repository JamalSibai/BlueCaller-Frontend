import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../constants/palette";

import History from "../screens/UserScreens/History";
import Testing from "../screens/UserScreens/testing";
import Messages from "../screens/UserScreens/Messages";

import { NavigationContainer } from "@react-navigation/native";
import { OnboardingStack } from "./OnboardingStack";
import { HomeStack } from "./HomeStack";
import { ConnectionsStack } from "./ConnectionsStack";
import { ProfileStack } from "./ProfileStack";
import { OrderStack } from "./OrderStack";

export function UserBottomTabs({ navigation }) {
  const BottomTabsNav = createBottomTabNavigator();
  const navigationRef = React.useRef(null);
  // const type = useSelector((state) => state?.user?.userType);

  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabsNav.Navigator
        initialRouteName="HomeScreen"
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
          name="Profile"
          component={ProfileStack}
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
        <BottomTabsNav.Screen
          name="HomeScreen"
          component={HomeStack}
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons name={"home"} size={28} color={color} />
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
          name="History"
          component={History}
          options={{
            title: "History",
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"history"}
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
          name="Order"
          component={OrderStack}
          options={{
            title: "Orders",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={"hammer-screwdriver"}
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
