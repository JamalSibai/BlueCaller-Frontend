import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../constants/palette";

import History from "../screens/UserScreens/History";
import Testing from "../screens/UserScreens/testing";

import { NavigationContainer } from "@react-navigation/native";
import { OnboardingStack } from "./OnboardingStack";
import { HomeStack } from "./HomeStack";
import { ConnectionsStack } from "./ConnectionsStack";
import { ProfileStack } from "./ProfileStack";

export function UserBottomTabs({ navigation }) {
  const BottomTabsNav = createBottomTabNavigator();
  const navigationRef = React.useRef(null);
  // const type = useSelector((state) => state?.user?.userType);

  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabsNav.Navigator
        initialRouteName="testing"
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
          name="testing"
          component={Testing}
          options={{
            title: "Testing",
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
          name="HomeScreen"
          component={HomeStack}
          options={{
            title: "Home",
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
          name="Connection"
          component={ConnectionsStack}
          options={{
            title: "Connection",
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
        />
        <BottomTabsNav.Screen
          name="Profile"
          component={ProfileStack}
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
      </BottomTabsNav.Navigator>
    </NavigationContainer>
  );
}
