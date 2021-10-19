import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import EditImage from "../screens/UserScreens/EditImage";
import EditName from "../screens/UserScreens/EditName";
import EditPassword from "../screens/UserScreens/EditPassword";
import EditPhone from "../screens/UserScreens/EditPhone";

import FreelancerProfile from "../screens/FreelancerScreens/FreelancerProfile";
import EditPrice from "../screens/FreelancerScreens/EditPrice";
import EditCategory from "../screens/FreelancerScreens/EditCategory";
import AddRegion from "../screens/FreelancerScreens/AddRegion";

import { colors } from "../constants/palette";

export function FreelancerProfileStack() {
  const RootStackNav = createStackNavigator();
  const navigationRef = useRef(null);

  return (
    <RootStackNav.Navigator>
      <RootStackNav.Screen
        name="Profile"
        component={FreelancerProfile}
        options={{
          title: "Profile",
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
        name="Edit Image"
        component={EditImage}
        options={{
          title: "Edit Image",
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
        name="Edit Name"
        component={EditName}
        options={{
          title: "Edit Name",
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
        name="Change Password"
        component={EditPassword}
        options={{
          title: "Change Password",
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
        name="Edit Phone Number"
        component={EditPhone}
        options={{
          title: "Edit Phone Number",
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
        name="Edit Price"
        component={EditPrice}
        options={{
          title: "Edit Price",
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
        name="Edit Category"
        component={EditCategory}
        options={{
          title: "Edit Category",
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
        name="Add Region"
        component={AddRegion}
        options={{
          title: "Edit Region",
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
