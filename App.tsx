import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { StackSwitcher } from "./src/navigation/StackSwitcher";
import { updateUserProfile } from "./src/redux/slices/userSlice";
import { store } from "./src/redux/store";
import Testing from "./src/screens/UserScreens/testing";
import Profile from "./src/screens/UserScreens/Profile";

const App = () => {
  const [data, setData] = useState({
    image:
      "https://bluecaller.tk/storage/Me8inkaENWQGbmCvdXjsbF4ZEAE2dGEVnbgKs8YB.jpg",
    name: "Jamal Sibai",
    email: "Jamal@gmail.com",
    phone: 76630304,
    rating: "2",
    price: "15",
  });
  // useEffect(() => {
  //   const user = asynctorage.getIETM("ITEM")
  //   if (user) {
  //     store.dispatch(updateUserProfile(user))
  //   }
  // }, [])

  // return <Profile props={data} />;
  // return <Testing props={data} />;
  return (
    <Provider store={store}>
      <StackSwitcher />
    </Provider>
  );
};

export default App;
