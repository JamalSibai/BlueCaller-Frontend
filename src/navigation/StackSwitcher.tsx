import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { DrawerStack } from "./DrawerStack";
import { OnboardingStack } from "./OnboardingStack";
import { BottomTabs } from "./TabsStack";
import { UserBottomTabs } from "./UserStack";
import { FreelancerBottomTabs } from "./FreelancerStack";

export function StackSwitcher() {
  const user = useSelector((state) => state?.user);

  // for drawer navigation
  // return user?.userProfile ? <DrawerStack /> : <OnboardingStack />;

  // for bottom tabs navigation
  return user?.userProfile ? (
    user?.userProfile.UserType == 0 ? (
      <UserBottomTabs />
    ) : (
      <FreelancerBottomTabs />
    )
  ) : (
    <OnboardingStack />
  );

  // return user?.userProfile ? <UserBottomTabs /> : <OnboardingStack />;

  // multi user
  // return loggedIn ? userType == "type1" ? <DrawerStack/> : <BottomTabs/> : <OnboardingStack />
}
